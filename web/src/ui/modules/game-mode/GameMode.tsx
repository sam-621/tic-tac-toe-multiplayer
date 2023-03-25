import { Logo } from '@/shared/common';

export const GameMode = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <Logo />
      </div>
      <div className="bg-semi-dark-navy px-8 py-6 rounded-2xl">
        <span className="text-base font-bold text-silver">PICK PLAYER 1’S MARK</span>
      </div>
    </div>
  );
};
