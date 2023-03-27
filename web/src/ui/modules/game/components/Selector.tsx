import { Player } from '@/interfaces/Game';
import { CrossIcon, NoughtIcon } from '@/shared/common';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { setPlayer1 } from '@/store/slices';

export const Selector = () => {
  const dispatch = useAppDispatch();
  const { player1 } = useAppSelector(state => state.game);
  const isCrosses = player1 === Player.CROSSES;

  return (
    <div className="bg-semi-dark-navy px-8 py-6 rounded-2xl flex flex-col gap-6 shadow-inset-card">
      <div>
        <p className="text-base text-center font-bold text-silver tracking-wider">
          PICK PLAYER 1’S MARK
        </p>
      </div>
      <div className="p-2 bg-dark-navy flex justify-center rounded-lg">
        <button
          type="button"
          onClick={() => dispatch(setPlayer1(Player.CROSSES))}
          className={`px-12 py-3 rounded-lg sm:w-full flex justify-center ${
            isCrosses ? 'bg-silver' : 'bg-none'
          }`}
        >
          <CrossIcon className={isCrosses ? 'fill-dark-navy' : 'fill-silver'} />
        </button>
        <button
          type="button"
          onClick={() => dispatch(setPlayer1(Player.NOUGHTS))}
          className={`px-12 py-3 rounded-lg sm:w-full flex justify-center ${
            !isCrosses ? 'bg-silver' : 'bg-none'
          }`}
        >
          <NoughtIcon className={!isCrosses ? 'fill-dark-navy' : 'fill-silver'} />
        </button>
      </div>
      <div>
        <p className="text-silver-darker text-center text-sm font-medium tracking-[0.875px]">
          REMEMBER : X GOES FIRST
        </p>
      </div>
    </div>
  );
};
