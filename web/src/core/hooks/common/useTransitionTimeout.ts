import { useEffect, useState } from 'react';

/**
 * Hook that gives you a control state to determinate if an animation has ended
 * @param startCounter conditions that determinate if the counter starts to count
 * @param duration the durations of the counter
 * @returns isHidden state that changes if the timer has finished
 */
export const useTransitionTimeout = (startCounter: boolean, duration = 500) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!startCounter) return;

    const timer = setTimeout(() => {
      setIsHidden(true);
    }, duration);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [startCounter, duration]);

  return {
    isHidden
  };
};
