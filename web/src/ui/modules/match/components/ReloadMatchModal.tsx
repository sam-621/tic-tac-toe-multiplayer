import { FC } from 'react';

import { useMatchFlow } from '@/hooks/match';
import { Modal, ModalProps, NeutralButton, PrimaryButton } from '@/shared/ui';

export const ReloadMatchModal: FC<Props> = ({ isOpen, onClose }) => {
  const { reloadMatch } = useMatchFlow();

  const resetMatchAndCloseModal = () => {
    reloadMatch();
    onClose();
  };

  return (
    <Modal className="gap-4" isOpen={isOpen}>
      <h1 className="text-silver text-2xl text-center">RESTART GAME?</h1>
      <div className="flex justify-center gap-4">
        <NeutralButton className="w-fit" onClick={onClose}>
          NO, CANCEL
        </NeutralButton>
        <PrimaryButton
          className="w-fit shadow-inset-primary-button-tiny"
          onClick={resetMatchAndCloseModal}
        >
          YES, RESTART
        </PrimaryButton>
      </div>
    </Modal>
  );
};

type Props = ModalProps & {
  onClose: () => void;
};
