import { useEffect, useState } from 'react';

/**
 * Hook that gives you a control state to determinate if a timer has ended
 * @param startCounter conditions that determinate if the timer starts to count
 * @param duration the durations of the timer
 * @returns isHidden state that changes if the timer has finished
 */
export const useTimer = (startCounter: boolean, duration = 500) => {
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    if (!startCounter) return;

    const timer = setTimeout(() => {
      setHasEnded(true);
    }, duration);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [startCounter, duration]);

  return {
    hasEnded
  };
};
