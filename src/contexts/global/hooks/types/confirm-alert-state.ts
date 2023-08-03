export type ConfirmAlertState = {
  isOpen: boolean;
  title: string | JSX.Element | null;
  description: string | JSX.Element | null;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
};
