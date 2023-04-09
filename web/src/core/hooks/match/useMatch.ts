import { useEffect, useState } from 'react';

import { Player } from '@/interfaces/Game';
import { useAppSelector } from '@/store/rootState';
import { getWinner } from '@/utils/match';

export const useMatch = () => {
  const { board, moves } = useAppSelector(state => state.match);

  const [winner, setWinner] = useState<Player | null>(null);

  useEffect(() => {
    if (moves < 5) return;

    const currentWinner = getWinner(board);

    setWinner(currentWinner);
  }, [board]);

  return {
    winner
  };
};
