import { FC, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

import { HtmlButtonProps } from '@/interfaces/common';

export const PrimaryButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'bg-light-yellow text-dark-navy shadow-inset-primary-button w-full p-4 pb-5 rounded-2xl text-base font-bold tracking-wider',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type Props = PropsWithChildren & HtmlButtonProps;
