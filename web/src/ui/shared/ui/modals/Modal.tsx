import { FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';

import { useModal } from '@/hooks/common/useModal';

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  useModal(onClose);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="button"
      onKeyDown={onClose}
      onClick={onClose}
      tabIndex={0}
      className="fixed top-0 h-screen w-full bg-black bg-opacity-50 grid items-center"
    >
      <div className="bg-semi-dark-navy py-11 grid justify-center">{children}</div>
    </div>,
    document.body
  );
};

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
