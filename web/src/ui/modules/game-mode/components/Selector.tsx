import { useState } from 'react';

import { Player } from '@/interfaces/Game';
import { CrossIcon, NoughtIcon } from '@/shared/common';

export const Selector = () => {
  const [player, setPlayer] = useState(Player.CROSSES);
  const isCrosses = player === Player.CROSSES;

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
          onClick={() => setPlayer(Player.CROSSES)}
          className={`px-12 py-3 rounded-lg sm:w-full flex justify-center ${
            isCrosses ? 'bg-silver' : 'bg-none'
          }`}
        >
          <CrossIcon className={isCrosses ? 'fill-dark-navy' : 'fill-silver'} />
        </button>
        <button
          type="button"
          onClick={() => setPlayer(Player.NOUGHTS)}
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
