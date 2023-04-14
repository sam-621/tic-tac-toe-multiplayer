/* eslint-disable sonarjs/cognitive-complexity */
import { FC } from 'react';

import { useMediaScreen } from '@/hooks/common';
import { Player } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { CrossIcon, HoverCrossIcon, HoverNoughtIcon, NoughtIcon } from '@/shared/common';
import { useAppSelector } from '@/store/rootState';

export const BoardItemButton: FC<Props> = ({ status, isHover }) => {
  const { player1 } = useAppSelector(state => state.game);
  const { currentTurn } = useAppSelector(state => state.match);
  const { isDesktop } = useMediaScreen();

  const isCrosses = player1 === Player.CROSSES;
  const canShowHover = isHover && currentTurn === player1;

  if (status === BoardItemStatus.CROSS) {
    return <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />;
  }

  if (status === BoardItemStatus.NOUGHT) {
    return <NoughtIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />;
  }

  return (
    <div className="w-10 sm:w-16">
      {canShowHover &&
        (isCrosses ? (
          <HoverCrossIcon className="" width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        ) : (
          <HoverNoughtIcon className="" width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        ))}
    </div>
  );
};

type Props = {
  status: BoardItemStatus;
  isHover: boolean;
};
