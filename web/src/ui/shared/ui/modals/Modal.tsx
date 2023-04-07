import { FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { WithClassName } from '@/interfaces/common';

export const Modal: FC<Props> = ({ children, className, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 h-screen w-full bg-black bg-opacity-50 grid items-start pt-36 sm:items-center sm:pt-0">
      <div className="bg-semi-dark-navy py-11">
        <div className={twMerge('xss:w-[327px] sm:w-[460px] m-auto flex flex-col', className)}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

type Props = ModalProps &
  WithClassName & {
    children: ReactNode;
  };

export type ModalProps = {
  isOpen: boolean;
};
