import { useTimer } from '@/hooks/common';
import { useMatch } from '@/hooks/match/useMatch';
import { GameStatus } from '@/interfaces/Game';
import { PreMultiplayerMatchModal } from '@/modules/match/components/PreMultiplayerMatchModal';
import { Logo } from '@/shared/common';
import { ReloadIcon } from '@/shared/common/ReloadIcon';
import { NeutralButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { Board } from './components/Board';
import { ResultMatchModal } from './components/ResultMatchModal';
import { CurrentTurn } from './components';

export const MatchView = () => {
  const { status } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);

  useMatch();

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
      <PreMultiplayerMatchModal />
      <ResultMatchModal />
    </>
  );
};
