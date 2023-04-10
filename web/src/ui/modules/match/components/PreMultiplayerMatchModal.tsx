import { FC } from 'react';

import { GameMode, GameStatus } from '@/interfaces/Game';
import { Modal } from '@/shared/ui';
import { useAppSelector } from '@/store/rootState';

import { MultiplayerMatchForm } from './MultiplayerMatchForm';

export const PreMultiplayerMatchModal: FC = () => {
  const { status, mode } = useAppSelector(state => state.game);

  const canShow = status === GameStatus.WAITING && mode === GameMode.MULTIPLAYER;

  return (
    <Modal className="gap-4" isOpen={canShow}>
      <h1 className="text-silver text-2xl text-center">Multiplayer Match</h1>
      <MultiplayerMatchForm />
    </Modal>
  );
};
