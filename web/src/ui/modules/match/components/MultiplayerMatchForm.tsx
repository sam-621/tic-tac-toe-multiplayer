import { useState } from 'react';

import { useSocketConnection } from '@/hooks/common/useSocketConnection';
import { useGameFlow } from '@/hooks/game';
import { usePlayersInRoom } from '@/hooks/match';
import { NeutralButton, PrimaryButton } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

const NUM_OF_PLAYERS_ALLOWED_TO_PLAY = 2;

export const MultiplayerMatchForm = () => {
  const { roomCode } = useAppSelector(state => state.game);

  const [localRoomCode, setLocalRoomCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const { createMultiplayerMatch, joinMultiplayerMatch, startMatch } = useGameFlow();
  const { playersInRoom } = usePlayersInRoom();

  const readyToStart = playersInRoom === NUM_OF_PLAYERS_ALLOWED_TO_PLAY;

  useSocketConnection();

  if (isJoining) {
    return (
      <div className="flex justify-center gap-4">
        <input
          className="rounded-lg bg-dark-navy p-2 text-silver outline-dark-navy"
          placeholder="Enter room code..."
          type="text"
          value={localRoomCode}
          maxLength={4}
          onChange={e => setLocalRoomCode(e.target.value)}
        />
        <PrimaryButton
          className="px-6 py-2 w-fit shadow-inset-primary-button-tiny"
          onClick={() => joinMultiplayerMatch(localRoomCode)}
        >
          JOIN
        </PrimaryButton>
      </div>
    );
  }

  if (roomCode) {
    return (
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-1 sm:gap-4 sm:flex-row">
          <span className="text-silver text-xl">
            Room Code: <strong>{roomCode}</strong>
          </span>
          <span className="text-silver text-xl hidden sm:block">|</span>
          <span className="text-silver text-xl">Players in room: {playersInRoom}</span>
        </div>
        {readyToStart && (
          <div>
            <PrimaryButton onClick={startMatch}>START GAME</PrimaryButton>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <NeutralButton className="pt-4 pb-5" onClick={() => setIsJoining(true)}>
        JOIN GAME
      </NeutralButton>
      <NeutralButton className="pt-4 pb-5" onClick={() => createMultiplayerMatch()}>
        CREATE GAME
      </NeutralButton>
    </div>
  );
};
