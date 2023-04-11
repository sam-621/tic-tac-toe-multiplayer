import { FC } from 'react';

import { twMerge } from 'tailwind-merge';

import { WithClassName } from '@/interfaces/common';

export const NoughtIcon: FC<Props> = ({ className, width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z"
        className={twMerge('fill-light-yellow', className)}
      />
    </svg>
  );
};

export const HoverNoughtIcon: FC<Props> = ({ className, width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Oval Copy"
        d="M33 2C50.1208 2 64 15.8792 64 33H66C66 14.7746 51.2254 0 33 0V2ZM2 33C2 15.8792 15.8792 2 33 2V0C14.7746 0 0 14.7746 0 33H2ZM33 64C15.8792 64 2 50.1208 2 33H0C0 51.2254 14.7746 66 33 66V64ZM64 33C64 50.1208 50.1208 64 33 64V66C51.2254 66 66 51.2254 66 33H64ZM33 18.963C25.2476 18.963 18.963 25.2476 18.963 33H20.963C20.963 26.3521 26.3521 20.963 33 20.963V18.963ZM47.037 33C47.037 25.2476 40.7524 18.963 33 18.963V20.963C39.6479 20.963 45.037 26.3521 45.037 33H47.037ZM33 47.037C40.7524 47.037 47.037 40.7524 47.037 33H45.037C45.037 39.6479 39.6479 45.037 33 45.037V47.037ZM18.963 33C18.963 40.7524 25.2476 47.037 33 47.037V45.037C26.3521 45.037 20.963 39.6479 20.963 33H18.963Z"
        fill="#F2B137"
        className={twMerge('', className)}
      />
    </svg>
  );
};

type Props = WithClassName & {
  width?: number;
  height?: number;
};
