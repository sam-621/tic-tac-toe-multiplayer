import { FC, useState } from 'react';

import { useMediaScreen } from '@/hooks/common';
import { THashMap } from '@/interfaces/common';
import { Player } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { CrossIcon, HoverCrossIcon, HoverNoughtIcon, NoughtIcon } from '@/shared/common';
import { useAppSelector } from '@/store/rootState';

export const BoardItem: FC<Props> = ({ status, updateBoard }) => {
  const { player1 } = useAppSelector(state => state.game);
  const { isDesktop } = useMediaScreen();

  const [isHover, setIsHover] = useState(false);

  const isCrosses = player1 === Player.CROSSES;

  const BoardItemState: THashMap<JSX.Element> = {
    [BoardItemStatus.CROSS]: <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />,
    [BoardItemStatus.NOUGHT]: (
      <NoughtIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
    ),
    [BoardItemStatus.EMPTY]: (
      <div className="w-10 sm:w-16">
        {isHover &&
          (isCrosses ? (
            <HoverCrossIcon className="" width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
          ) : (
            <HoverNoughtIcon
              className=""
              width={isDesktop ? 64 : 40}
              height={isDesktop ? 64 : 40}
            />
          ))}
      </div>
    )
  };

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
      onClick={updateBoard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {BoardItemState[status]}
    </button>
  );
};

type Props = {
  status: BoardItemStatus;
  updateBoard: () => void;
};
