import { FC, PropsWithChildren } from 'react';

export const WrapperUi: FC<Props> = ({ children }) => {
  return <div className="px-6">{children}</div>;
};

type Props = PropsWithChildren;
