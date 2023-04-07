import { useEffect, useState } from 'react';

import { onJoinGameRoom } from '@/sockets/events';

export const usePlayersInRoom = () => {
  const [playersInRoom, setPlayersInRoom] = useState(1);

  useEffect(() => {
    onJoinGameRoom(({ code }) => {
      setPlayersInRoom(Number(code));
    });
  }, []);

  return {
    playersInRoom
  };
};
