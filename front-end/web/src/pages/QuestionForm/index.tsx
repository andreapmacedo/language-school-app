import { useState, useEffect } from 'react';
import { addQuestion } from '../../firebase/questions';
import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../firebase/tags';
import { addThemeToDB, getThemesFromDB } from '../../firebase/themes';
import Select from '../../components/Bricks/Select';
import GenericButton from '../../components/Bricks/Buttons/gens/firstGen/GenericButton';
import AddButton from '../../components/Bricks/Buttons/AddButton';
import CloseButton from '../../components/Bricks/Buttons/CloseButton';
import Modal from "react-modal";
import { HiTrash } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';
import { IoMdAddCircle } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import CardExplanation from '../../components/QuestionForm/CardExplanation';
import AnswerArea from '../../components/QuestionForm/AnswerArea';

// import Header from '../../components/Header';
// import GenericModal from '../../components/GenericModal';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { Container,
    Form,
    Input,
    Button,
    Label,
    TagContainer,
    TagWrapper,
    BoxTags,
    BoxSetup,
    BoxAdd,
    TagLeft,
    TagRight,
    ListCard,
    BoxCards,
  } from './styles';

import { IQuestionQuery, IAnswer } from '../../interfaces';
import { db } from '../../firebase/config';

Modal.setAppElement('#root');


const QuestionForm = () => {
  
  const initialQuery: IQuestionQuery = {
    category: '',
    difficulty: '',
    type: '',
    level: '',
    correct_answer: '',
    question: '',
    explanations: [],
    answers: [],
    themes: [],
    tags: [],
    // createdAt: firebase.firestore.Timestamp;
  };

  const [queryAdd, setQueryAdd] = useState(initialQuery);
  const [inputAnswer, setInputAnswer] = useState('');
  const [inputQuestionExplanation, setInputQuestionExplanation] = useState<string>('');
  const [theme, setTheme] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  
  const [tagInput, setTagInput] = useState('');
  const [addTagOpen, setAddTagOpen] = useState(false);

  
  const [questionTags, setQuestionTags] = useState<string[]>([]);
  const [dbTags, setDbTags] = useState([]);
  const [modalSearchTag, setModalSearchTag] = useState('');
  const [dbTagChange, setDbTagChange] = useState(false);

  const [questionLevel, setQuestionLevel] = useState(['1', '2', '3', '4', '5']);
  const [questionType, setQuestionType] = useState(['Multiple', 'Boolean']);
  const [questionDifficulty, setQuestionDifficulty] = useState(['Easy', 'Medium', 'Hard']);
  const [questionCategory, setQuestionCategory] = useState(['Quiz', 'Test', 'Exam', 'Homework', 'Assignment', 'Project', 'Other']);


  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    // setModalModeUpdate(false)
    // setTask(schedule);
  }

  function addAnswer(): void {
    const newAnswer: IAnswer = { answer: inputAnswer, correct: isCorrect };
    setAnswers([...answers, newAnswer]);    
    setInputAnswer('');
  }

  function addTagToQuestion(tagToAdd: string): void {
    setQuestionTags([...questionTags, tagToAdd]);
    setDbTags(dbTags.filter(({tag}) => tag !== tagToAdd));
  }

  function setAddTagToDB(): void {
    if(tagInput === '') return;
    if(dbTags.find(({tag}) => tag === tagInput)) {
      alert('Tag already exists');
      return;
    }
    if(questionTags.find((qt) => qt === tagInput)) {
      alert('Tag already exists in question');
      return;
    }
    addTagToDB({tag: tagInput});    
    setDbTagChange(!dbTagChange);
    
    // getTagsFromDB().then((tags) => {
    //   setDbTags(tags);
    // });
    setTagInput('');
  }

  function addTheme(): void {
    setThemes([...themes, theme]);
    addThemeToDB({theme});
    setTheme('');
  }

  function validateInputs() {
    // if (queryAdd.category === '') {
    //   alert('Please enter an category');
    //   return false;
    // }
    if (queryAdd.question === '') {
      alert('Please enter an question');
      return false;
    }
    if (answers.length < 2) {
      alert('Please enter at least two answers');
      return false;
    }
    if (answers.filter((ans) => ans.correct).length === 0 ) {      
      alert('Please enter the correct answer');
      return false;
    }
    return true;
  }

  function updateQuery(query: IQuestionQuery) {
    setQueryAdd(query);
  }

  // useEffect(() => {
  //   updateQuery({
  //     ...queryAdd,
  //     answers: answers.map((ans) => ans),
  //     // answers: answers.map((ans) => ans.answer),
  //   });
  // }, [answers]);

  // useEffect(() => {
  //   updateQuery({
  //     ...queryAdd,
  //     themes: themes.map((theme) => theme)
  //   });
  // }, [themes]);

  // useEffect(() => {
  //   updateQuery({
  //     ...queryAdd,
  //     tags: tags.map((tag) => tag)
  //   });
  // }, [tags]);

  /**
   * Get tags from DB when component is mounted
   */
  useEffect(() => {
    getTagsFromDB().then((tags) => {
      setDbTags(tags);
    });
  }, []); 

  useEffect(() => {
    getTagsFromDB().then((tags) => {
      // Remover os tags que foram adicionados a questão
      const dbTags = tags.filter(({tag}) => !questionTags.includes(tag));
      setDbTags(dbTags);
    });
  }, [dbTagChange]);


  const handleQueryAddInput = ({target} : any) => {
    const { value, name } = target;
    // if (name === 'title') {
    //   setTask({...task, title: value });
    // }
    setQueryAdd({...queryAdd, [name]: value });
  };

  const handleSelectInput = (selectedItem: any) => {
    // console.log('handleSelectInput', selectedItem);
    const { value, name } = selectedItem;
    setQueryAdd({...queryAdd, [name]: value });
  };

  const setDefault = () => {
    setQueryAdd(initialQuery);
    setAnswers([]);
    setQuestionTags([]);
    setThemes([]);
  }

  const handleSubmit = () => {
    // console.log('handleSubmit');
    if (validateInputs()) {
      addQuestion(queryAdd);
      setDefault();
    }
  }

  const removeAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);
  }
  
  const removeTag = (index: number, tag: string) => {
    // console.log('removeTag', index, tag);
    // console.log('dbTags', dbTags);
    
    
    // alerta com confirmação
    // if (window.confirm('Are you sure you wish to delete this item?')) {
      const newTags = [...questionTags];
      newTags.splice(index, 1);
      setQuestionTags(newTags);
      setDbTags([...dbTags, {tag}]);
    // }
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

  const addQuestionExplanation = () => {
    if(inputQuestionExplanation === '') return;
    setQueryAdd({...queryAdd, explanations: [...queryAdd.explanations, inputQuestionExplanation]});
    setInputQuestionExplanation('');
  }


  const removeTheme = (index: number) => {
    const newTheme = [...themes];
    newTheme.splice(index, 1);
    setThemes(newTheme);
  }


  const handleSearchTag = (e: any) => {
    setModalSearchTag(e.target.value);
    dbTags.filter((tag) => tag.includes(modalSearchTag));
  }
  
  const removeExplanation = (index: number) => {
    const newExplanation = [...queryAdd.explanations];
    newExplanation.splice(index, 1);
    setQueryAdd({...queryAdd, explanations: newExplanation});
  }


  return (
    
    <Container>
    {/* //   <Header /> */}
      <Form
        // onSubmit={handleSubmit}
      >
        <Label htmlFor='question'>
          Question:
          <Input
            type="text"
            name="question"
            value={queryAdd.question}
            onChange={handleQueryAddInput}
          />
        </Label>

        <BoxSetup>
          <Label htmlFor='category'>
            Category:
            <Select name="category" options={questionCategory} onChange={handleSelectInput}/>
          </Label>
          <Label htmlFor='difficulty'>
            Difficulty:
            <Select name="difficulty" options={questionDifficulty} onChange={handleSelectInput}/>
          </Label>
          <Label htmlFor='type'>
            Type:
            <Select name="type" options={questionType} onChange={handleSelectInput}/>
          </Label>
          <Label htmlFor='level'>
            Level:
            <Select name="level" options={questionLevel} onChange={handleSelectInput}/>
          </Label>
        </BoxSetup>

        <CardExplanation
          onClick={removeExplanation}
          list={queryAdd.explanations} 
          addQuestionExplanation={addQuestionExplanation}
          setInputQuestionExplanation={setInputQuestionExplanation}
          inputQuestionExplanation={inputQuestionExplanation} 
        />

        <AnswerArea
          inputAnswer={inputAnswer}
          setInputAnswer={setInputAnswer}
          // list={answers} 


        />
        <BoxTags>
          <Label htmlFor='answers'>
            Answers:
            {
              answers.map((answer, index) => (
                <div key={index}>
                  <p>{answer.answer}</p>
                  {answer.correct && <p>Resposta correta</p>}
                  <p onClick={() => removeAnswer(index)} >x</p>
                </div>
              ))
            }
          </Label>
          {/* <Button
              type="button"
              onClick={() => addAnswer()}
            >
              Add Answers
          </Button>       */}
        </BoxTags>
        {/* <BoxCards>
          <Label htmlFor='explanations'>
            Explanations:
          </Label>
            {
              queryAdd.explanations.map((explanation, index) => (
                <ListCard key={index}>
                  <p>{explanation}</p>
                  <div
                    onClick={() => removeExplanation(index)}
                  >
                  <CiEdit 
                    // size={20}
                    style={{
                      color:  "#5ac9d1",
                      // backgroundColor : '#000000',
                      // padding:  '30px'
                    }}
                  
                  />                    
                  </div>


                  <div
                    onClick={() => removeExplanation(index)}
                  >
                  <HiTrash 
                    // size={20}
                    style={{
                      color:  "#d15a5a",
                      // backgroundColor : '#000000',
                      // padding:  '30px'
                    }}
                  
                  />                    
                  </div>
                </ListCard>
              ))
            }
        </BoxCards> */}
        
        <BoxTags>
          <Label htmlFor='questionTags'>
            Tags:
            <TagContainer>

            
          {
            questionTags.map((tag, index) => (
              <TagWrapper key={index}>
                <TagLeft>{tag}</TagLeft>
                <TagRight><p onClick={() => removeTag(index, tag)} >x</p></TagRight>
              </TagWrapper>
            ))
          }
          </TagContainer>
          </Label>
          {/* <Button
              type="button"
              onClick={() => addTagToQuestion()}
            >
              Add questionTags
          </Button>         */}

          <Button onClick={openModal}>add tags</Button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              // closeTimeoutMS={10000}
              onRequestClose={closeModal}
              contentLabel="Add Answer"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <CloseButton onClick={closeModal}/>
              <h3>Click on tags to add them</h3>
              <div>
                
                
                <TagContainer>
                  {dbTags?.map(({tag}, index) => (
                    <TagWrapper key={index}>
                      <TagLeft
                        onClick={() => addTagToQuestion(tag)}  
                      >{tag}</TagLeft>
                      <TagRight
                        onClick={() => setRemoveTagFromDB(index)}
                      >
                        {/* <p>x</p> */}
                        <HiTrash 
                          // size={20}
                          style={{
                            color:  "#d15a5a",
                          }}
                        
                        />
                      </TagRight>
                    </TagWrapper>
                  ))}
                </TagContainer>
                <div>
                  <AddButton onClick={() => setAddTagOpen(!addTagOpen)}
                    text={addTagOpen ? "Cancel" : "Add Tag"}
                   />
                  {addTagOpen &&
                    <div>
                      <Label htmlFor='tagsInput'>
                        Tag:
                      <Input
                        type="text"
                        name="tagsInput"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                      </Label>
                      <AddButton 
                        onClick={setAddTagToDB}
                        text="Add"
                        disabled={tagInput.length === 0}
                      />
                    </div>
                  }
                  
                </div>

              </div>              
            </Modal>
          </div>


        </BoxTags>
        
          {/* <GenericModal></GenericModal> */}

        <Button
          type="button"
          onClick={handleSubmit}
        >
          Adicionar Questão
        </Button>        

      </Form>

      {/* <BoxAdd>
        <Label htmlFor='explanations'>
          Explanation:
        <Input
          type="text"
          name="explanation"
          value={inputQuestionExplanation}
          onChange={(e) => setInputQuestionExplanation(e.target.value)}
          />
        </Label>
        <Button
            type="button"
            onClick={() => addQuestionExplanation()}
          >
            Adicionar Explicação
        </Button>   
      </BoxAdd> */}

      <BoxAdd>
        <Label htmlFor='answers'>
          Answers:
        <Input
          type="text"
          name="answers"
          value={inputAnswer}
          onChange={(e) => setInputAnswer(e.target.value)}
          />
        </Label>
        
        <div>
          <Label htmlFor="isCorrect" >
            Resposta correta
            <Input
              type="checkbox"
              name="isCorrect"
              onChange={ () => setIsCorrect(!isCorrect) }
              checked={ isCorrect }
            />
          </Label>
        </div>        

        <Button
            type="button"
            onClick={() => addAnswer()}
          >
            Adicionar Resposta
        </Button>        
      </BoxAdd>
      <BoxAdd>
      <h3>Tags</h3>
        <div>
          <Label htmlFor='tagsInput'>
            Tag:
          <Input
            type="text"
            name="tagsInput"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            />
          </Label>

          <Button
              type="button"
              onClick={() => setAddTagToDB()}
            >
              Adicionar Tag ao banco de dados
          </Button>
          <TagContainer>
            {dbTags?.map(({tag}, index) => (
              <TagWrapper key={index}>
                <TagLeft
                  onClick={() => addTagToQuestion(tag)}  
                >{tag}</TagLeft>
                <TagRight
                  onClick={() => setRemoveTagFromDB(index)}
                >
                  {/* <p>x</p> */}
                  <HiTrash 
                    // size={20}
                    style={{
                      color:  "#d15a5a",
                      // backgroundColor : '#000000',
                      // padding:  '30px'
                    }}
                  
                  />
                </TagRight>
                {/* <div>E</div> */}
                {/* <p onClick={() => removeTag(index)} >x</p> */}
              </TagWrapper>
            ))}
          </TagContainer>
        </div>     
      </BoxAdd>
      
    </Container>
  );
}

export default QuestionForm;
