import { useTimer } from '@/hooks/common';
import { GameStatus } from '@/interfaces/Game';
import { Logo } from '@/shared/common';
import { ReloadIcon } from '@/shared/common/ReloadIcon';
import { NeutralButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { CurrentTurn } from './components';

export const BoardView = () => {
  const { status } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);

  if (status === GameStatus.CREATING || !hasEnded) return null;

  return (
    <div className={`${hasEnded && 'slide-in'}`}>
      <header className="flex justify-between items-center">
        <Logo />
        <CurrentTurn />
        <NeutralButton className="w-fit rounded p-3">
          <ReloadIcon />
        </NeutralButton>
      </header>
    </div>
  );
};
