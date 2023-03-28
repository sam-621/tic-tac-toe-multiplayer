import { useMediaScreen, useTimer } from '@/hooks/common';
import { GameStatus } from '@/interfaces/Game';
import { CrossIcon, Logo } from '@/shared/common';
import { ReloadIcon } from '@/shared/common/ReloadIcon';
import { NeutralButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { CurrentTurn } from './components';

export const BoardView = () => {
  const { isDesktop } = useMediaScreen();
  const { status } = useAppSelector(state => state.game);
  const { hasEnded } = useTimer(status === GameStatus.WAITING);

  if (status === GameStatus.CREATING || !hasEnded) return null;

  return (
    <div className={`${hasEnded && 'slide-in'} flex flex-col gap-5`}>
      <header className="flex justify-between items-center">
        <Logo />
        <CurrentTurn />
        <NeutralButton className="w-fit rounded p-3">
          <ReloadIcon />
        </NeutralButton>
      </header>
      <main className="grid grid-cols-3 gap-5 place-items-center">
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
      </main>
    </div>
  );
};
