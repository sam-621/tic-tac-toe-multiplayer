import { FC, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

import { HtmlButtonProps } from '@/interfaces/common';

export const NeutralButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'bg-silver text-dark-navy shadow-inset-neutral-button w-full p-4 pb-5 rounded-2xl text-base font-bold tracking-wider',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type Props = PropsWithChildren & HtmlButtonProps;
