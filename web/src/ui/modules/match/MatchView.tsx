import { useTimer, useToggle } from '@/hooks/common';
import { useMatch } from '@/hooks/match';
import { GameStatus } from '@/interfaces/Game';
import { Logo, ReloadIcon } from '@/shared/common';
import { NeutralButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { Board } from './components/Board';
import { ReloadMatchModal } from './components/ReloadMatchModal';
import { ResultMatchModal } from './components/ResultMatchModal';
import { CurrentTurn, PreMultiplayerMatchModal } from './components';

export const MatchView = () => {
  const { status } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);
  const { state, toggle } = useToggle();

  useMatch();

  if (status === GameStatus.CREATING || !hasEnded) return null;

  return (
    <>
      <div className={`${hasEnded && 'slide-in'} flex flex-col gap-5`}>
        <header className="flex justify-between items-center">
          <Logo />
          <CurrentTurn />
          <NeutralButton className="w-fit rounded p-3" onClick={toggle}>
            <ReloadIcon />
          </NeutralButton>
        </header>
        <Board />
      </div>
      <PreMultiplayerMatchModal />
      <ResultMatchModal />
      <ReloadMatchModal isOpen={state} onClose={toggle} />
    </>
  );
};
