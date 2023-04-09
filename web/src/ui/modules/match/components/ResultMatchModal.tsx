import { FC } from 'react';

import { useToggle } from '@/hooks/common';
import { Player } from '@/interfaces/Game';
import { CrossIcon, NoughtIcon } from '@/shared/common';
import { Modal, NeutralButton, PrimaryButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

export const ResultMatchModal: FC<Props> = ({ winner, isTied }) => {
  const { player1 } = useAppSelector(state => state.game);
  const { state, toggle } = useToggle(true);

  const isPlayer1Winner = winner === player1;
  const isCrossWinner = winner === Player.CROSSES;
  console.log({
    isTied
  });

  if (isTied) {
    return (
      <Modal isOpen className="flex flex-col gap-6">
        <span className="text-2xl font-bold tracking-widest text-silver text-center">
          ROUND TIED
        </span>
        <div className="flex justify-center gap-4">
          <NeutralButton className="w-fit" onClick={toggle}>
            QUIT
          </NeutralButton>
          <PrimaryButton className="w-fit" onClick={toggle}>
            NEXT ROUND
          </PrimaryButton>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={state && Boolean(winner)} className="flex flex-col gap-6">
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
        <NeutralButton className="w-fit" onClick={toggle}>
          QUIT
        </NeutralButton>
        <PrimaryButton className="w-fit" onClick={toggle}>
          NEXT ROUND
        </PrimaryButton>
      </div>
    </Modal>
  );
};

type Props = {
  winner: Player | null;
  isTied: boolean;
};
