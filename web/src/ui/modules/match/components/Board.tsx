import { useEffect } from 'react';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { onMatchMove } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { updateBoard } from '@/store/slices';

import { BoardItem } from './BoardItem';

export const Board = () => {
  const { board } = useAppSelector(state => state.match);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onMatchMove(({ player, position }) => {
      dispatch(
        updateBoard({
          position: { x: position.x, y: position.y },
          type: player === Player.CROSSES ? BoardItemStatus.CROSS : BoardItemStatus.NOUGHT
        })
      );
    });
  }, [dispatch]);

  return (
    <main className="grid grid-cols-3 gap-5 place-items-center">
      {board.map((row, i) => {
        return row.map((item, j) => (
          <BoardItem key={item + Math.random()} status={item} position={{ x: i, y: j }} />
        ));
      })}
    </main>
  );
};
