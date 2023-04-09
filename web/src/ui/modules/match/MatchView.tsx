import { useEffect } from 'react';

import { useTimer, useToggle } from '@/hooks/common';
import { useMatch } from '@/hooks/match/useMatch';
import { GameMode, GameStatus } from '@/interfaces/Game';
import { PreMultiplayerMatchModal } from '@/modules/match/components/PreMultiplayerMatchModal';
import { Logo } from '@/shared/common';
import { ReloadIcon } from '@/shared/common/ReloadIcon';
import { NeutralButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { Board } from './components/Board';
import { CurrentTurn } from './components';

export const MatchView = () => {
  const { state: isOpen, setState: setIsOpen } = useToggle();
  const { status, mode } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);
  const { winner } = useMatch();
  console.log({
    winner
  });

  useEffect(() => {
    if (status === GameStatus.WAITING && mode === GameMode.MULTIPLAYER) {
      setIsOpen(true);
      return;
    }

    setIsOpen(false);
  }, [status, mode, setIsOpen]);

  if (status === GameStatus.CREATING || !hasEnded) return null;

  return (
    <>
      <div className={`${hasEnded && 'slide-in'} flex flex-col gap-5`}>
        <header className="flex justify-between items-center">
          <Logo />
          <CurrentTurn />
          <NeutralButton className="w-fit rounded p-3">
            <ReloadIcon />
          </NeutralButton>
        </header>
        <Board />
      </div>
      <PreMultiplayerMatchModal isOpen={isOpen} />
    </>
  );
};
