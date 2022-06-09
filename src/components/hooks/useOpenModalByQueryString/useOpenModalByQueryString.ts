import { useRouter } from 'next/router';
import React from 'react';

type ModalSetter = (open: boolean) => void;
type MappingModalSetterByKey<Key extends string> = Record<Key, ModalSetter>;

const useOpenModalByQueryString = <Key extends string>(
  actionsMap: MappingModalSetterByKey<Key>,
) => {
  const router = useRouter();
  const { modal } = router.query;
  const modalKeys = React.useMemo(() => Object.keys(actionsMap), [actionsMap]);

  const isTargetByKey = React.useCallback(
    (key: string) => {
      if (!modal) return false;
      if (Array.isArray(modal)) return modal.includes(key);
      return modal === key;
    },
    [modal],
  );

  const isKeyOfModal = React.useCallback(
    (key: string): key is keyof typeof actionsMap => key in actionsMap,
    [actionsMap],
  );

  const updateModalByKey = React.useCallback(
    (key: string) => {
      if (!isKeyOfModal(key)) return;
      const isTarget = isTargetByKey(key);
      const openModal = actionsMap[key];
      openModal(isTarget);
    },
    [actionsMap, isTargetByKey, isKeyOfModal],
  );

  const openModal = React.useCallback(
    (key: Key | Key[]) => {
      const currentModal = modal ? ([] as string[]).concat(modal) : undefined;
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          modal: currentModal
            ? Array.from(new Set(currentModal.concat(key)))
            : key,
        },
      });
    },
    [modal, router],
  );

  const closeModal = React.useCallback(
    (key?: Key | Key[]) => {
      if (!key) return router.back();
      const currentModal = modal ? ([] as string[]).concat(modal) : [];

      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          modal: currentModal.filter((c) => !isTargetByKey(c)),
        },
      });
    },
    [isTargetByKey, modal, router],
  );

  // For: update modal-state by query
  React.useEffect(() => {
    modalKeys.forEach(updateModalByKey);
  }, [modalKeys, updateModalByKey]);

  return { openModal, closeModal };
};

export default useOpenModalByQueryString;
