import { useDispatch } from 'react-redux';

import constate from 'constate';

import { modalSliceAction } from '@features/modal/modalSlice';

import useOpenModalByQueryParams from 'hooks/useOpenModalByQueryParams';

function useGlobalModalHandler() {
  const dispatch = useDispatch();
  const { closeModal: closeGlobalModal, openModal: openGlobalModal } =
    useOpenModalByQueryParams({
      'global-modal': (isOpen: boolean) =>
        dispatch(modalSliceAction.setIsOpenGlobalModal(isOpen)),
    });

  return { closeGlobalModal, openGlobalModal };
}

export const [GlobalModalHandlerProvider, useGlobalModalHandlerContext] =
  constate(useGlobalModalHandler);

export function withGlobalModalHandlerContext<T extends Function>(
  Component: T,
) {
  return function WrappedComponent(props: Parameter<T>) {
    return (
      <GlobalModalHandlerProvider>
        <Component {...props} />
      </GlobalModalHandlerProvider>
    );
  };
}
