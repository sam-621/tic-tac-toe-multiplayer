import { CrossIcon } from '@/shared/common';

export const CurrentTurn = () => {
  return (
    <div className="flex items-center gap-2 p-4 shadow-inset-card-tiny bg-semi-dark-navy rounded-md">
      <CrossIcon className="fill-silver" width={16} height={16} />
      <span className="text-silver tracking-wider text-sm font-bold">TURN</span>
    </div>
  );
};
