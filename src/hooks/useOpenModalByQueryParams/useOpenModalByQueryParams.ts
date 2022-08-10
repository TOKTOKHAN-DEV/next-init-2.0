import { useRouter } from 'next/router';
import React from 'react';

import { UrlObject } from 'url';

import { removeDuplecate } from '@utils/array';

type ModalSetter = (open: boolean) => void;
type MappingModalSetterByKey<ModalKey extends string> = Record<
  ModalKey,
  ModalSetter
>;

const useOpenModalByQueryParams = <ModalKey extends string>(
  setterMap: MappingModalSetterByKey<ModalKey>,
) => {
  const router = useRouter();
  const queryModal = router.query.modal;

  const isOpenByKey = React.useCallback(
    (key: string): boolean => {
      if (!queryModal) return false;
      if (Array.isArray(queryModal)) return queryModal.includes(key);
      return queryModal === key;
    },
    [queryModal],
  );

  const isKeyOfModal = React.useCallback(
    (key: string): key is keyof typeof setterMap => key in setterMap,
    [setterMap],
  );

  const getCurrentModals = React.useCallback((): string[] => {
    return queryModal ? ([] as string[]).concat(queryModal) : [];
  }, [queryModal]);

  const updateModalUrl = React.useCallback(
    (opendModals: string | string[]): UrlObject => ({
      pathname: router.pathname,
      query: {
        ...router.query,
        modal: opendModals,
      },
    }),
    [router.pathname, router.query],
  );

  const addToModalArray = React.useCallback(
    (key: string | string[]): string[] =>
      removeDuplecate(getCurrentModals().concat(key)),
    [getCurrentModals],
  );

  const removeFromModalArray = React.useCallback(
    (key?: string | string[]): string[] => {
      if (!key) return [];
      const isNotSameKey = (target: string) =>
        Array.isArray(key) ? !key.includes(target) : key !== target;

      return getCurrentModals().filter(isNotSameKey);
    },
    [getCurrentModals],
  );

  const openModal = React.useCallback(
    (key: ModalKey | ModalKey[]) => {
      router.replace(updateModalUrl(addToModalArray(key)), undefined, {
        shallow: true,
        scroll: false,
      });
    },
    [addToModalArray, updateModalUrl, router],
  );

  const closeModal = React.useCallback(
    (key?: ModalKey | ModalKey[]) => {
      router.replace(updateModalUrl(removeFromModalArray(key)), undefined, {
        shallow: true,
        scroll: false,
      });
    },
    [updateModalUrl, removeFromModalArray, router],
  );

  const updateModalByKey = React.useCallback(
    (key: string) => {
      if (!isKeyOfModal(key)) return;
      const setIsOpenModal = setterMap[key];
      setIsOpenModal(isOpenByKey(key));
    },
    [setterMap, isOpenByKey, isKeyOfModal],
  );

  // For: update modal-state by query
  React.useEffect(() => {
    Object.keys(setterMap).forEach(updateModalByKey);
  }, [setterMap, updateModalByKey]);

  return { openModal, closeModal };
};

export default useOpenModalByQueryParams;
