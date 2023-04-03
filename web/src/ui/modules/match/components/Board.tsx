import { useAppSelector } from '@/store/rootState';

import { BoardItem } from './BoardItem';

export const Board = () => {
  const { board } = useAppSelector(state => state.match);

  return (
    <main className="grid grid-cols-3 gap-5 place-items-center">
      {board.map((row, i) => {
        return row.map((item, j) => (
          <BoardItem key={item + Math.random()} status={item} position={[i, j]} />
        ));
      })}
    </main>
  );
};
