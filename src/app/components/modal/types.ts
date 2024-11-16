export interface BackOptions {
  show?: boolean;
}

export interface ModalOperateProps {
  title?: string;
  body?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  confirmText?: string;
  cancelText?: string;
  backOptions?: BackOptions;
}
