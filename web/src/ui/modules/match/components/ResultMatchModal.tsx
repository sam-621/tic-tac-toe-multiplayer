import { FC } from 'react';

import { useMatchFlow } from '@/hooks/match';
import { GameStatus, Player } from '@/interfaces/Game';
import { CrossIcon, NoughtIcon } from '@/shared/common';
import { Modal, NeutralButton, PrimaryButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

export const ResultMatchModal: FC = () => {
  const { player1, status } = useAppSelector(state => state.game);
  const { matchStatus } = useAppSelector(state => state.match);
  const { quitGame, nextRound } = useMatchFlow();

  const { winner, isTied } = matchStatus;

  const isPlayer1Winner = winner === player1;
  const isCrossWinner = winner === Player.CROSSES;
  const canShow = status === GameStatus.MATCH_FINISHED;

  if (!canShow) return null;

  if (isTied) {
    return (
      <Modal isOpen className="flex flex-col gap-6">
        <span className="text-2xl font-bold tracking-widest text-silver text-center">
          ROUND TIED
        </span>
        <div className="flex justify-center gap-4">
          <NeutralButton className="w-fit" onClick={quitGame}>
            QUIT
          </NeutralButton>
          <PrimaryButton className="w-fit" onClick={nextRound}>
            NEXT ROUND
          </PrimaryButton>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen className="flex flex-col gap-6">
      <span className="text-center tracking-wider font-bold text-sm text-silver">{`PLAYER ${
        isPlayer1Winner ? '1' : '2'
      } WINS!`}</span>
      <div className="flex justify-center items-center gap-2">
        {isCrossWinner ? <CrossIcon /> : <NoughtIcon />}
        <span
          className={`text-2xl font-bold tracking-widest ${
            isCrossWinner ? 'text-light-blue' : 'text-light-yellow'
          }`}
        >
          TAKES THE ROUND
        </span>
      </div>
      <div className="flex justify-center gap-4">
        <NeutralButton className="w-fit" onClick={quitGame}>
          QUIT
        </NeutralButton>
        <PrimaryButton className="w-fit" onClick={nextRound}>
          NEXT ROUND
        </PrimaryButton>
      </div>
    </Modal>
  );
};
