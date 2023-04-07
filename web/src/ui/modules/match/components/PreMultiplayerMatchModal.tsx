import { FC } from 'react';

import { Modal, ModalProps } from '../../../shared/ui/modals/Modal';

import { MultiplayerMatchForm } from './MultiplayerMatchForm';

export const PreMultiplayerMatchModal: FC<Props> = ({ isOpen }) => {
  return (
    <Modal className="gap-4" isOpen={isOpen}>
      <h1 className="text-silver text-2xl text-center">Multiplayer Match</h1>
      <MultiplayerMatchForm />
    </Modal>
  );
};

type Props = ModalProps;
