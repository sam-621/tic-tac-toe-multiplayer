import { useEffect, useState } from 'react';

import { useGameFlow } from '@/hooks/game';
import { NeutralButton, PrimaryButton } from '@/shared/ui';
import { onJoinGameRoom } from '@/sockets/events';
import { useAppSelector } from '@/store/rootState';

export const MultiplayerMatchForm = () => {
  const [isJoining, setIsJoining] = useState(false);
  const [extRoomCode, setExtRoomCode] = useState('');
  const [playersInRoom, setPlayersInRoom] = useState(1);
  const { roomCode } = useAppSelector(state => state.game);
  const { createMultiplayerMatch, joinMultiplayerMatch } = useGameFlow();

  useEffect(() => {
    onJoinGameRoom(({ code }) => {
      setPlayersInRoom(Number(code));
    });
  }, []);

  if (isJoining) {
    return (
      <div className="flex justify-center gap-4">
        <input type="text" value={extRoomCode} onChange={e => setExtRoomCode(e.target.value)} />
        <PrimaryButton
          className="px-6 py-2 w-fit shadow-inset-primary-button-tiny"
          onClick={() => joinMultiplayerMatch(extRoomCode)}
        >
          Join
        </PrimaryButton>
      </div>
    );
  }

  if (roomCode) {
    return (
      <div className="flex flex-col justify-center items-center gap-1 sm:gap-4 sm:flex-row">
        <span className="text-silver text-xl">
          Room Code: <strong>{roomCode}</strong>
        </span>
        <span className="text-silver text-xl hidden sm:block">|</span>
        <span className="text-silver text-xl">Players in room: {playersInRoom}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <NeutralButton className="pt-4 pb-5" onClick={() => setIsJoining(true)}>
        Join Game
      </NeutralButton>
      <NeutralButton className="pt-4 pb-5" onClick={() => createMultiplayerMatch()}>
        Create Game
      </NeutralButton>
    </div>
  );
};
