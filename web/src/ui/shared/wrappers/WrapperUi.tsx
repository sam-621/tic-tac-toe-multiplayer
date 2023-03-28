import { FC, PropsWithChildren } from 'react';

export const WrapperUi: FC<Props> = ({ children }) => {
  return (
    <div className="p-6 h-screen  overflow-hidden">
      <div className="xss:w-[327px] sm:w-[460px] m-auto h-full">{children}</div>
    </div>
  );
};

type Props = PropsWithChildren;
