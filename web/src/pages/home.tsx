import { THashMap } from '@/interfaces/common';
import { GameStatus } from '@/interfaces/Game';
import { BoardView } from '@/modules/board';
import { GameView } from '@/modules/game';
import { useAppSelector } from '@/store/rootState';

export const HomePage = () => {
  const { status } = useAppSelector(state => state.game);

  const Steps: THashMap<JSX.Element> = {
    [GameStatus.CREATING]: <GameView />,
    [GameStatus.WAITING]: <BoardView />
  };

  return Steps[status];
};
