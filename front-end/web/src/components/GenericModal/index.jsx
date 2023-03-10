import { useState } from 'react';
import Modal from 'react-modal';

const GenericModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
          
        >
          <h2>Modal Title</h2>
          <button className="modal-close" onClick={closeModal}>close</button>
          {/* {modalContent} */}
        </Modal>
      )}
    </>
  );
}

export default GenericModal;