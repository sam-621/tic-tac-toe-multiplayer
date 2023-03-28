import { useMediaLayout } from 'use-media';

const DESKTOP_INITIAL_SIZE = 640;

export const useMediaScreen = () => {
  const isDesktop = useMediaLayout({ minWidth: DESKTOP_INITIAL_SIZE });

  return {
    isDesktop,
    isMobile: !isDesktop
  };
};
