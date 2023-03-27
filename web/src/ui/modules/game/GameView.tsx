import { useGameFlow } from '@/hooks/game';
import { GameMode } from '@/interfaces/Game';
import { Logo } from '@/shared/common';
import { PrimaryButton, SecondaryButton } from '@/shared/ui';

import { Selector } from './components';

export const GameView = () => {
  const { createGame } = useGameFlow();

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-8 sm:w-[460px]">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Selector />
        <div className="flex flex-col gap-4">
          <PrimaryButton onClick={() => createGame(GameMode.MULTIPLAYER)}>
            NEW GAME (VS MULTIPLAYER)
          </PrimaryButton>
          <SecondaryButton onClick={() => createGame(GameMode.LOCAL_PLAYER)}>
            NEW GAME (VS LOCAL PLAYER)
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};
