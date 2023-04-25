import AlertBasis from '@/components/@Alert/AlertBasis';
import { useConfirmAlert } from '@/hooks/useConfirmAlert';

function ControlledConfirmAlert() {
  const { state, cleanup } = useConfirmAlert();
  return (
    <AlertBasis
      header={state.title || undefined}
      body={state.description || undefined}
      isOpen={state.isOpen}
      onClose={() => {
        state.onCancel?.();
        cleanup();
      }}
      onConfirm={() => {
        state.onConfirm?.();
        cleanup();
      }}
    />
  );
}

export default ControlledConfirmAlert;
