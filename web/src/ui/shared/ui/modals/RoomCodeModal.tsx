import { FC } from 'react';

import { Modal, ModalProps } from './Modal';

export const RoomCodeModal: FC<Props> = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <h1 className="text-silver text-2xl text-center">Room code</h1>
      <span className="text-silver text-2xl text-center">1234</span>
    </Modal>
  );
};

type Props = ModalProps;
