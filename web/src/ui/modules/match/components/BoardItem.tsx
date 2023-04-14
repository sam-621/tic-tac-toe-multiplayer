import { FC, useState } from 'react';

import { GameStatus } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { useAppSelector } from '@/store/rootState';

import { BoardItemButton } from './BoardItemButton';

export const BoardItem: FC<Props> = ({ status, updateBoard }) => {
  const { status: gameStatus } = useAppSelector(state => state.game);

  const [isHover, setIsHover] = useState(false);

  const isBoardDisable = gameStatus !== GameStatus.PLAYING;

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
      onClick={updateBoard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={isBoardDisable}
    >
      <BoardItemButton isHover={isHover} status={status} />
    </button>
  );
};

type Props = {
  status: BoardItemStatus;
  updateBoard: () => void;
};
