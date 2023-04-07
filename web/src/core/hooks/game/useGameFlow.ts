import { GameMode, GameStatus } from '@/interfaces/Game';
import { joinGameRoom } from '@/sockets/events';
import { useAppDispatch } from '@/store/rootState';
import { setGameMode, setGameStatus, setRoomCode } from '@/store/slices';
import { generateRoomCode } from '@/utils/game';

export const useGameFlow = () => {
  const dispatch = useAppDispatch();

  const createGame = (gameMode: GameMode) => {
    const roomCode = generateRoomCode();

    dispatch(setGameMode(gameMode));
    dispatch(setGameStatus(GameStatus.WAITING));
    dispatch(setRoomCode(roomCode));
    joinGameRoom({ code: roomCode });
  };

  const startGame = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
  };

  return {
    createGame,
    startGame
  };
};
