import React, {useState, useEffect} from 'react';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import TagList from '../TagList';
import CollapsedHeader from '../../../CollapsedHeader';
import Tag from '../Tag';
import TagManagement from '../TagManagement';


import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';

import { HiTrash } from 'react-icons/hi';

// import Modal from "react-modal";

import { Container, CollapsedContent, ControllerPanel,
  TagsContainer
} from './styles';

// Modal.setAppElement('#root');

interface Props {
  questionAdded: boolean;
  updateQuery: (query: any) => void;
  queryAdd: object;
}

const TagContent: React.FC<Props> = ({
  questionAdded,
  updateQuery,
  queryAdd,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const [questionTags, setQuestionTags] = useState<string[]>([]);
// const [tagInput, setTagInput] = useState('');

const [dbTags, setDbTags] = useState([]);
  
// const [dbTagChange, setDbTagChange] = useState(false);

useEffect(() => {
  getTagsFromDB().then((tags) => {
    setDbTags(tags);
  });
}, []); 

useEffect(() => {
  setQuestionTags([]);
}, [questionAdded]);

useEffect(() => {
  updateQuery({
    ...queryAdd,
    tags: questionTags.map((tag) => tag)
  });
}, [questionTags]);


  // const openModal = () => {
  //   setModalIsOpen(true);
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   // setModalModeUpdate(false)
  //   // setTask(schedule);
  // }

  function addTagToQuestion(tagToAdd: string): void {
    setQuestionTags([...questionTags, tagToAdd]);
    setDbTags(dbTags.filter(({tag}) => tag !== tagToAdd));
  }

  const setRemoveTagFromDB = (index: number) => {
    // alerta com confirmação
    if (window.confirm('Are you sure you wish to delete this item?')) {
      
      const { id } = dbTags[index];
      removeTagFromDB(id);
      const newTags = [...dbTags];
      newTags.splice(index, 1);
      setDbTags(newTags);
    }
  }



  const removeQuestionTag = (index: number, tag: string) => {
    // console.log('removeQuestionTag', index, tag);
    // console.log('dbTags', dbTags);
    // alerta com confirmação
    // if (window.confirm('Are you sure you wish to delete this item?')) {
      const newTags = [...questionTags];
      newTags.splice(index, 1);
      setQuestionTags(newTags);
      setDbTags([...dbTags, {tag}]);
    // }
  }


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
      <CollapsedHeader
        title='Add Tag'
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
        {isCollapsed &&
          <CollapsedContent>
            <TagsContainer>
              {dbTags?.map(({tag}, index) => (
                
                <Tag
                  tag={tag}
                  key={index}
                  index={index}
                  // remove={removeQuestionTag} 
                  add={addTagToQuestion}
                />
              ))}
            </TagsContainer>

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
            <TagManagement />
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



      {/* <TagList questionTags={questionTags} removeTag={removeQuestionTag} /> */}
      
      <TagsContainer>
        {questionTags?.map((tag, index) => (
          <Tag
            tag={tag}
            key={index}
            index={index}
            remove={removeQuestionTag} 
            // add={addTagToQuestion}
          />
        ))}
      </TagsContainer>      
      
      
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
