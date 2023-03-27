import { BoardView } from '@/modules/board';
import { GameView } from '@/modules/game';

export const HomePage = () => {
  return (
    <>
      <GameView />
      <BoardView />
    </>
  );
};
