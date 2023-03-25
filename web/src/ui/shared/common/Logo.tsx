import { CrossIcon } from './CrossIcon';
import { NoughtIcon } from './NoughtIcon';

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <CrossIcon />
      <NoughtIcon />
    </div>
  );
};
