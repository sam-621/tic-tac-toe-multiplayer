import { FC } from 'react';

import { useMediaScreen } from '@/hooks/common';
import { THashMap } from '@/interfaces/common';
import { Player } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { CrossIcon, NoughtIcon } from '@/shared/common';
import { emitMatchMove } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { updateBoard } from '@/store/slices';

export const BoardItem: FC<Props> = ({ status, position }) => {
  const { isDesktop } = useMediaScreen();
  const dispatch = useAppDispatch();
  const { player1, roomCode } = useAppSelector(state => state.game);

  const handleClick = () => {
    dispatch(
      updateBoard({
        position,
        type: player1 === Player.CROSSES ? BoardItemStatus.CROSS : BoardItemStatus.NOUGHT
      })
    );

    emitMatchMove({
      player: player1,
      position: { x: position.x, y: position.y },
      roomCode
    });
  };

  const BoardItemState: THashMap<JSX.Element> = {
    [BoardItemStatus.CROSS]: <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />,
    [BoardItemStatus.NOUGHT]: (
      <NoughtIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
    ),
    [BoardItemStatus.EMPTY]: <div className="w-10 sm:w-16" />
  };

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
      onClick={handleClick}
    >
      {/* <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} /> */}
      {BoardItemState[status]}
    </button>
  );
};

type Props = {
  status: BoardItemStatus;
  position: {
    x: number;
    y: number;
  };
};
