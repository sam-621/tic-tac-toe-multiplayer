/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { GameStatus, Player } from '@/interfaces/Game';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { MatchStatus, setGameStatus, setMatchStatus, updateMatchScore } from '@/store/slices';
import { getWinner } from '@/utils/match';

export const useMatch = () => {
  const dispatch = useAppDispatch();
  const { board, moves, matchStatus, matchScore } = useAppSelector(state => state.match);
  const { status } = useAppSelector(state => state.game);

  const totalMoves = board.length * board.length;

  const updateMatchStatus = (payload: MatchStatus) => {
    const { winner, isTied } = payload;

    if (winner === Player.CROSSES) {
      dispatch(updateMatchScore({ ...matchScore, crosses: matchScore.crosses + 1 }));
    }

    if (winner === Player.NOUGHTS) {
      dispatch(updateMatchScore({ ...matchScore, noughts: matchScore.noughts + 1 }));
    }

    if (isTied) {
      dispatch(updateMatchScore({ ...matchScore, ties: matchScore.ties + 1 }));
    }

    dispatch(setMatchStatus(payload));
    dispatch(setGameStatus(GameStatus.MATCH_FINISHED));
  };

  useEffect(() => {
    if (moves < 5 || status === GameStatus.MATCH_FINISHED) return;

    const winner = getWinner(board);

    if (!winner) return;

    updateMatchStatus({ isTied: false, winner });
  }, [board]);

  useEffect(() => {
    if (moves !== totalMoves || matchStatus.winner) return;

    updateMatchStatus({ isTied: true, winner: null });
  }, [matchStatus.winner, moves]);
};
