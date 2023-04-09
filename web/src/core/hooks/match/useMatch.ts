/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Player } from '@/interfaces/Game';
import { useAppSelector } from '@/store/rootState';
import { getWinner } from '@/utils/match';

export const useMatch = () => {
  const { board, moves } = useAppSelector(state => state.match);

  const [winner, setWinner] = useState<Player | null>(null);
  const [isTied, setIsTied] = useState<boolean>(false);

  const totalMoves = board.length * board.length;

  useEffect(() => {
    if (moves < 5) return;

    const currentWinner = getWinner(board);

    setWinner(currentWinner);
  }, [board]);

  useEffect(() => {
    console.log({
      moves,
      totalMoves
    });

    if (moves !== totalMoves || winner) return;

    setIsTied(true);
  }, [winner, moves]);

  return {
    winner,
    isTied
  };
};
