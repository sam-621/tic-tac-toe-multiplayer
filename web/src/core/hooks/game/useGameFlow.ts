import { GameMode, GameStatus } from '@/interfaces/Game';
import { useAppDispatch } from '@/store/rootState';
import { setGameMode, setGameStatus } from '@/store/slices';

export const useGameFlow = () => {
  const dispatch = useAppDispatch();

  const createGame = (gameMode: GameMode) => {
    dispatch(setGameMode(gameMode));
    dispatch(setGameStatus(GameStatus.WAITING));
  };

  const startGame = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
  };

  return {
    createGame,
    startGame
  };
};
