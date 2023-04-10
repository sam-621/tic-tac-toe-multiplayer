/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { GameStatus } from '@/interfaces/Game';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { MatchStatus, setGameStatus, setMatchStatus } from '@/store/slices';
import { getWinner } from '@/utils/match';

export const useMatch = () => {
  const dispatch = useAppDispatch();
  const { board, moves, matchStatus } = useAppSelector(state => state.match);

  const totalMoves = board.length * board.length;

  const updateMatchStatus = (payload: MatchStatus) => {
    dispatch(setMatchStatus(payload));
    dispatch(setGameStatus(GameStatus.MATCH_FINISHED));
  };

  useEffect(() => {
    if (moves < 5) return;

    const winner = getWinner(board);

    if (!winner) return;

    updateMatchStatus({ isTied: false, winner });
  }, [board]);

  useEffect(() => {
    if (moves !== totalMoves || matchStatus.winner) return;

    updateMatchStatus({ isTied: true, winner: null });
  }, [matchStatus.winner, moves]);
};
