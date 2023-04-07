import { Player } from '@/interfaces/Game';
import { CrossIcon, NoughtIcon } from '@/shared/common';
import { useAppSelector } from '@/store/rootState';

export const CurrentTurn = () => {
  const { currentTurn } = useAppSelector(state => state.match);

  return (
    <div className="flex items-center gap-2 p-4 shadow-inset-card-tiny bg-semi-dark-navy rounded-md">
      {currentTurn === Player.CROSSES ? (
        <CrossIcon className="fill-silver" width={16} height={16} />
      ) : (
        <NoughtIcon className="fill-silver" width={16} height={16} />
      )}
      <span className="text-silver tracking-wider text-sm font-bold">TURN</span>
    </div>
  );
};
