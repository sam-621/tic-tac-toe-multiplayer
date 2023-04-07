import { GameMode, GameStatus } from '@/interfaces/Game';
import { joinGameRoom } from '@/sockets/events';
import { useAppDispatch } from '@/store/rootState';
import { setGameMode, setGameStatus, setRoomCode } from '@/store/slices';
import { generateRoomCode } from '@/utils/game';

export const useGameFlow = () => {
  const dispatch = useAppDispatch();

  const createGame = (gameMode: GameMode) => {
    dispatch(setGameMode(gameMode));
    dispatch(setGameStatus(GameStatus.WAITING));
  };

  const createMultiplayerMatch = () => {
    const roomCode = generateRoomCode();
    dispatch(setRoomCode(roomCode));
    joinGameRoom({ code: roomCode });
  };

  const joinMultiplayerMatch = (roomCode: string) => {
    dispatch(setRoomCode(roomCode));
    joinGameRoom({ code: roomCode });
  };

  const startGame = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
  };

  return {
    createGame,
    createMultiplayerMatch,
    joinMultiplayerMatch,
    startGame
  };
};
