import React, { useState } from 'react';
import ModalContent from '../ModalContent';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
 
import { Container,
  ModalOpened
} from './styles';

import Modal from "react-modal";


interface Props {
  setDbTagChange: (e: boolean) => void;
  dbTagChange: boolean;
}

const ModalContainer: React.FC<Props> = ({
  setDbTagChange,
  dbTagChange,
}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <GenericButton onClick={openModal} text="Create new tag" />
      <ModalOpened>
        <Modal
          isOpen={modalIsOpen}
          // closeTimeoutMS={10000}
          onRequestClose={closeModal}
          contentLabel="Add Tag Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <GenericButton onClick={closeModal} text="Close" /> 
          <ModalContent
            setDbTagChange={setDbTagChange}
            dbTagChange={dbTagChange}
          />
        </Modal>
      </ModalOpened>
    </Container>
  );
};

export default ModalContainer;