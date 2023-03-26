import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type WithClassName = {
  className?: string;
};

// HTML
export type HtmlButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
