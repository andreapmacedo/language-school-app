import React, { useState } from 'react';
import { Container,
  ModalOpened
} from './styles';

import TagAddInputContent from '../TagAddInputContent';

import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';
import GenericButton from '../../../Bricks/Buttons/GenericButton';

 
import Modal from "react-modal";
import GenericInput from '../../../Bricks/GenericInput';

interface Props {
  setDbTagChange: (e: boolean) => void;
  dbTagChange: boolean;
}

const TagModal: React.FC<Props> = ({
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
          

          <TagAddInputContent
            setDbTagChange={setDbTagChange}
            dbTagChange={dbTagChange}
          />
        </Modal>
      </ModalOpened>
        
                  
      
    </Container>
  );
};

export default TagModal;