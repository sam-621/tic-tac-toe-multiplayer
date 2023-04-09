import { useEffect } from 'react';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus, BoardPosition } from '@/interfaces/match';
import { emitMatchMove, onMatchMove } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { changeTurn, updateBoard as updateLocalBoard } from '@/store/slices';

export const useBoard = () => {
  const dispatch = useAppDispatch();
  const { player1, roomCode } = useAppSelector(state => state.game);
  const { currentTurn } = useAppSelector(state => state.match);

  const updateBoard = (position: BoardPosition) => {
    if (currentTurn !== player1) return;

    dispatch(
      updateLocalBoard({
        position,
        type: player1 === Player.CROSSES ? BoardItemStatus.CROSS : BoardItemStatus.NOUGHT
      })
    );

    emitMatchMove({
      player: player1,
      position: { x: position.x, y: position.y },
      roomCode
    });
  };

  useEffect(() => {
    onMatchMove(({ player, position }) => {
      dispatch(changeTurn({ turn: player }));
      dispatch(
        updateLocalBoard({
          position: { x: position.x, y: position.y },
          type: player === Player.CROSSES ? BoardItemStatus.CROSS : BoardItemStatus.NOUGHT
        })
      );
    });
  }, []);

  return {
    updateBoard
  };
};
