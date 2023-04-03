import { FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';

export const Modal: FC<Props> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 h-screen w-full bg-black bg-opacity-50 grid items-center">
      <div className="bg-semi-dark-navy py-11 grid justify-center">{children}</div>
    </div>,
    document.body
  );
};

type Props = ModalProps & {
  children: ReactNode;
};

export type ModalProps = {
  isOpen: boolean;
};
