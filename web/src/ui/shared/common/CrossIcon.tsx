import { FC } from 'react';

import { twMerge } from 'tailwind-merge';

import { WithClassName } from '@/interfaces/common';

export const CrossIcon: FC<WithClassName> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.4628 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.4628 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.4628 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
        className={twMerge('fill-light-blue', className)}
      />
    </svg>
  );
};
