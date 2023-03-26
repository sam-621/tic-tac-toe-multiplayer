import { Logo } from '@/shared/common';
import { PrimaryButton, SecondaryButton } from '@/shared/ui';

import { Selector } from '../components';

export const GameMode = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Selector />
        <div className="flex flex-col gap-4">
          <PrimaryButton>NEW GAME (VS CPU)</PrimaryButton>
          <SecondaryButton>NEW GAME (VS PLAYER)</SecondaryButton>
        </div>
      </div>
    </div>
  );
};
