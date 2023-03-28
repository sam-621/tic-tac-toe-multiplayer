import { useTimer } from '@/hooks/common';
import { useGameFlow } from '@/hooks/game';
import { GameMode, GameStatus } from '@/interfaces/Game';
import { Logo } from '@/shared/common';
import { PrimaryButton, SecondaryButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { GameModeSelector } from './components';

export const GameModeView = () => {
  const { status } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);
  const { createGame } = useGameFlow();

  if (hasEnded) return null;

  return (
    <div className="h-full grid items-center">
      <div className={`flex flex-col gap-8 ${status === GameStatus.WAITING && 'slide-out'}`}>
        <div className="flex justify-center">
          <Logo />
        </div>
        <GameModeSelector />
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
