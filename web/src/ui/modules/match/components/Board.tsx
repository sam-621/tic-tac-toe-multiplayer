import { useBoard } from '@/hooks/match';
import { useAppSelector } from '@/store/rootState';

import { BoardItem } from './BoardItem';

export const Board = () => {
  const { board } = useAppSelector(state => state.match);
  const { updateBoard } = useBoard();

  return (
    <main className="grid grid-cols-3 gap-5 place-items-center">
      {board.map((row, x) => {
        return row.map((item, y) => (
          <BoardItem
            key={item + Math.random()}
            status={item}
            updateBoard={() => updateBoard({ x, y })}
          />
        ));
      })}
    </main>
  );
};
