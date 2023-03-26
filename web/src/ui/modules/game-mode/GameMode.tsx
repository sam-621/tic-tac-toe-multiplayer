import { Logo } from '@/shared/common';

import { Selector } from '../components';

export const GameMode = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Selector />
      </div>
    </div>
  );
};
