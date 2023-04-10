import { useEffect } from 'react';

import { socket } from '@/sockets/connection';

export const useSocketConnection = () => {
  useEffect(() => {
    socket.connect();
  }, []);
};
