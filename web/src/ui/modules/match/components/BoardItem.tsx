import { FC } from 'react';

import { useMediaScreen } from '@/hooks/common';
import { THashMap } from '@/interfaces/common';
import { BoardItemStatus } from '@/interfaces/match';
import { CrossIcon, NoughtIcon } from '@/shared/common';

export const BoardItem: FC<Props> = ({ status, updateBoard }) => {
  const { isDesktop } = useMediaScreen();

  const BoardItemState: THashMap<JSX.Element> = {
    [BoardItemStatus.CROSS]: <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />,
    [BoardItemStatus.NOUGHT]: (
      <NoughtIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
    ),
    [BoardItemStatus.EMPTY]: <div className="w-10 sm:w-16" />
  };

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
      onClick={updateBoard}
    >
      {BoardItemState[status]}
    </button>
  );
};

type Props = {
  status: BoardItemStatus;
  updateBoard: () => void;
};
