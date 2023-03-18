import React, { useState } from 'react';
import { Container } from './styles';

import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';

import Modal from "react-modal";


interface Props {
  

}

const TagModal: React.FC<Props> = ({


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
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // closeTimeoutMS={10000}
        onRequestClose={closeModal}
        contentLabel="Add Answer"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <button onClick={closeModal}/>
        <h3>Click on tags to add them</h3>
        
                  
      </Modal>
      
    </Container>
  );
};

export default TagModal;