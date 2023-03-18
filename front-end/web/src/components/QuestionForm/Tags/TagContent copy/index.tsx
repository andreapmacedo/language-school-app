import React, {useState} from 'react';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import TagList from '../TagList';

import { HiTrash } from 'react-icons/hi';

// import Modal from "react-modal";

import { Container, CardContent, CollapsedContent, ControllerPanel,
  TagWrapper, TagLeft, TagRight
} from './styles';

// Modal.setAppElement('#root');

interface Props {
  questionTags: string[];
  removeTag: (index: number, tag: string) => void;
  addTagToQuestion: (tag: string) => void;
  dbTags: {tag: string}[];
  addTagOpen: boolean;
  tagInput: string;

  setRemoveTagFromDB: (index: number) => void;
  setDbTags: () => void;
  setAddTagToDB: () => void;
  setAddTagOpen: (e: boolean) => void;
  setTagInput: (e: string) => void;

}

const TagContent: React.FC<Props> = ({
  questionTags,
  removeTag,
  setDbTags,
  addTagToQuestion,
  setRemoveTagFromDB,
  setAddTagOpen,
  setTagInput,
  tagInput,
  addTagOpen,
  setAddTagToDB,
  dbTags,

}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const [questionTags, setQuestionTags] = useState<string[]>([]);




  // const openModal = () => {
  //   setModalIsOpen(true);
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   // setModalModeUpdate(false)
  //   // setTask(schedule);
  // }


  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    // setInputAnswer(''); 
  }

  // const addOnClickHandler = () => {
  //   addAnswer();
  //   setIsCollapsed(!isCollapsed);
  // }

  return (
    <Container>
      {!isCollapsed &&
        <AddButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          // onClick={openModal}
          text='Add Tags'
          color='#eee'
        />
      }

        {isCollapsed &&
          <CollapsedContent>


          {
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
          }


            <ControllerPanel>
              {/* <GenericButton
                disabled={inputAnswer.length === 0} 
                onClick={addOnClickHandler}
                text='add'
                icon={GiCheckMark}
              /> */}
              <CancelButton
                onClick={cancelOnClickHandler}
                text='cancel'
              />
            </ControllerPanel>
          </CollapsedContent>
        }


          {/* <div>
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
            </Modal>
          </div> */}



      <TagList questionTags={questionTags} removeTag={removeTag} />
      {/* {questionTags.map((tag, index) => (
      <TagWrapper key={index}>
        <TagLeft>{tag}</TagLeft>
        <TagRight><p onClick={() => removeTag(index, tag)} >x</p></TagRight>
      </TagWrapper>
      ))} */}
    </Container>
  );
};

export default TagContent;
