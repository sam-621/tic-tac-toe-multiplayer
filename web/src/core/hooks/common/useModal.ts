import { useEffect } from 'react';

export const useModal = (onClose: () => void) => {
  useEffect(() => {
    document.addEventListener('keydown', e => {
      const { key } = e;

      if (key !== 'Escape') return;

      onClose();
    });
  }, [onClose]);
};
