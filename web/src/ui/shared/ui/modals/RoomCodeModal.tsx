import { FC } from 'react';

import { useAppSelector } from '@/store/rootState';

import { Modal, ModalProps } from './Modal';

export const RoomCodeModal: FC<Props> = ({ isOpen }) => {
  const { roomCode } = useAppSelector(state => state.game);
  return (
    <Modal isOpen={isOpen}>
      <h1 className="text-silver text-2xl text-center">Room code</h1>
      <span className="text-silver text-2xl text-center">{roomCode}</span>
    </Modal>
  );
};

type Props = ModalProps;
