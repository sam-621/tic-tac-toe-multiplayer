import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type WithClassName = {
  className?: string;
};

export type THashMap<R = string> = {
  [index: string | number]: R;
};

// HTML
export type HtmlButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
