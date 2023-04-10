import { GameStatus } from '@/interfaces/Game';
import { useAppDispatch } from '@/store/rootState';
import { restartGame, restartMatch, setGameStatus } from '@/store/slices';

export const useMatchFlow = () => {
  const dispatch = useAppDispatch();

  const quitGame = () => {
    dispatch(setGameStatus(GameStatus.CREATING));
    dispatch(restartMatch());
    dispatch(restartGame());
  };

  const nextRound = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
    dispatch(restartMatch());
  };

  return {
    quitGame,
    nextRound
  };
};
