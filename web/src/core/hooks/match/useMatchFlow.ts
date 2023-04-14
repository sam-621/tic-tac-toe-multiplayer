import { useEffect } from 'react';

import { GameStatus } from '@/interfaces/Game';
import { MatchFinishedAction } from '@/interfaces/match';
import { emitMatchFinished, onMatchFinished } from '@/sockets/events';
import { useAppDispatch, useAppSelector } from '@/store/rootState';
import { restartGame, restartMatch, setGameStatus, updateMatchScore } from '@/store/slices';

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

  const localReloadMatch = () => {
    dispatch(setGameStatus(GameStatus.PLAYING));
    dispatch(restartMatch());
    dispatch(updateMatchScore({ crosses: 0, noughts: 0, ties: 0 }));
  };

  useEffect(() => {
    onMatchFinished(({ action }) => {
      if (action === MatchFinishedAction.QUIT) {
        localQuitGame();
        return;
      }

      if (action === MatchFinishedAction.RELOAD) {
        localReloadMatch();
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
    },
    reloadMatch: () => {
      localReloadMatch();
      emitMatchAction(MatchFinishedAction.RELOAD);
    }
  };
};
