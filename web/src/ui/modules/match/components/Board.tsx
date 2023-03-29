import { useMediaScreen } from '@/hooks/common';
import { CrossIcon } from '@/shared/common';

export const Board = () => {
  const { isDesktop } = useMediaScreen();

  return (
    <main className="grid grid-cols-3 gap-5 place-items-center">
      {Array.from({ length: 9 }).map(() => (
        <button
          type="button"
          className="bg-semi-dark-navy shadow-inset-card  w-24 h-24 sm:w-36 sm:h-36 rounded-lg flex justify-center items-center"
        >
          <CrossIcon width={isDesktop ? 64 : 40} height={isDesktop ? 64 : 40} />
        </button>
      ))}
    </main>
  );
};
