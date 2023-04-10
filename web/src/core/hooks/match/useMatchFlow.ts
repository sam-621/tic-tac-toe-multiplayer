import { useEffect } from 'react';

import { GameStatus } from '@/interfaces/Game';
import { MatchFinishedAction } from '@/interfaces/match';
import { emitMatchFinished, onMatchFinished } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { restartGame, restartMatch, setGameStatus } from '@/store/slices';

export const useMatchFlow = () => {
  const dispatch = useAppDispatch();
  const { roomCode } = useAppSelector(state => state.game);

  const emitMatchAction = (action: MatchFinishedAction) => {
    emitMatchFinished({ action, roomCode });
  };

  const localQuitGame = () => {
    dispatch(setGameStatus(GameStatus.CREATING));
    dispatch(restartMatch());
    dispatch(restartGame());
  };

  const localNextRound = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
    dispatch(restartMatch());
  };

  useEffect(() => {
    onMatchFinished(({ action }) => {
      if (action === MatchFinishedAction.QUIT) {
        localQuitGame();
        return;
      }

      localNextRound();
    });
  }, []);

  return {
    quitGame: () => {
      localQuitGame();
      emitMatchAction(MatchFinishedAction.QUIT);
    },
    nextRound: () => {
      localNextRound();
      emitMatchAction(MatchFinishedAction.NEXT_ROUND);
    }
  };
};
