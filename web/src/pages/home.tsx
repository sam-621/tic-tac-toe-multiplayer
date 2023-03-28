import { GameModeView } from '@/modules/game-mode';
import { MatchView } from '@/modules/match';

export const HomePage = () => {
  return (
    <>
      <GameModeView />
      <MatchView />
    </>
  );
};
