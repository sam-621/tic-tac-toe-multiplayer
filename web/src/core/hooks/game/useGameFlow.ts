import { useEffect, useState } from 'react';

import { GameMode, GameStatus, Player } from '@/interfaces/Game';
import { emitJoinGameRoom, emitMatchStarted, onMatchStarted } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { setGameMode, setGameStatus, setPlayer1, setPlayer2, setRoomCode } from '@/store/slices';
import { generateRoomCode } from '@/utils/game';

export const useGameFlow = () => {
  const dispatch = useAppDispatch();
  const { player1, roomCode: gameRoomCode } = useAppSelector(state => state.game);

  const [isOwner, setIsOwner] = useState({
    isOwner: false,
    canVerify: false
  });

  /**
   * Any player
   */
  const createGame = (gameMode: GameMode) => {
    dispatch(setGameMode(gameMode));
    dispatch(setGameStatus(GameStatus.WAITING));
  };

  /**
   * Player 1 - owner
   */
  const createMultiplayerMatch = () => {
    const roomCode = generateRoomCode();
    dispatch(setRoomCode(roomCode));
    emitJoinGameRoom({ code: roomCode });
    setIsOwner({ canVerify: true, isOwner: true });
  };

  /**
   * Player 2
   */
  const joinMultiplayerMatch = (roomCode: string) => {
    dispatch(setRoomCode(roomCode));
    emitJoinGameRoom({ code: roomCode });
    setIsOwner({ canVerify: true, isOwner: false });
  };

  /**
   * Player 1 - owner
   */
  const startMatch = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
    dispatch(setPlayer2(player1 === Player.CROSSES ? Player.NOUGHTS : Player.CROSSES));
    emitMatchStarted({ player: player1, roomCode: gameRoomCode });
  };

  /**
   * Player 2
   */
  useEffect(() => {
    if (isOwner.isOwner || !isOwner.canVerify) return;

    onMatchStarted(({ player }) => {
      /**
       * this code only be executed in players 2 flow
       * player 1 will always be the current player, no matter if the current players is the owner or not
       * the parameter `player` will always be the owner player
       */
      dispatch(setPlayer1(player === Player.CROSSES ? Player.NOUGHTS : Player.CROSSES));
      dispatch(setPlayer2(player));
      dispatch(setGameStatus(GameStatus.PLAYING));
    });
  }, [dispatch, isOwner]);

  return {
    createGame,
    createMultiplayerMatch,
    joinMultiplayerMatch,
    startMatch
  };
};
