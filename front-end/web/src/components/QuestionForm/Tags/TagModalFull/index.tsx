import React, {useState} from 'react';
import { Container } from './styles';

import Modal from "react-modal";
Modal.setAppElement('#root');

interface Props {
  questionTags: string[];
  removeTag: (index: number, tag: string) => void;
}

const TagModalFull: React.FC<Props> = ({


}) => {

  // const openModal = () => {
  //   setModalIsOpen(true);
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   // setModalModeUpdate(false)
  //   // setTask(schedule);
  // }



  return (
    <Container>
          <div>
            {/* <Modal
              isOpen={modalIsOpen}
              // closeTimeoutMS={10000}
              onRequestClose={closeModal}
              contentLabel="Add Answer"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <button onClick={closeModal}/>
              <h3>Click on tags to add them</h3>
              <div>
                
                
                <div>
                  {dbTags?.map(({tag}, index) => (
                    <TagWrapper key={index}>
                      <TagLeft
                        onClick={() => addTagToQuestion(tag)}  
                      >{tag}</TagLeft>
                      <TagRight
                        onClick={() => setRemoveTagFromDB(index)}
                      >
                        <HiTrash 
                          
                          style={{
                            color:  "#d15a5a",
                          }}
                        />
                      </TagRight>
                    </TagWrapper>
                  ))}
                </div>
                <div>
                  <AddButton onClick={() => setAddTagOpen(!addTagOpen)}
                    text={addTagOpen ? "Cancel" : "Add Tag"}
                   />
                  {addTagOpen &&
                    <div>
                      <label htmlFor='tagsInput'>
                        Tag:
                      <input
                        type="text"
                        name="tagsInput"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                      </label>
                      <AddButton 
                        onClick={setAddTagToDB}
                        text="Add"
                        disabled={tagInput.length === 0}
                      />
                    </div>
                  }
                </div>
                <p>crate new tag</p>
              </div>              
            </Modal> */}
          </div>
    </Container>
  );
};

export default TagModalFull;