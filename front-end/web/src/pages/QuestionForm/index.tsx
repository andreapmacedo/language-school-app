import { useState, useEffect } from 'react';
import { addQuestion } from '../../firebase/questions';
import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../firebase/tags';
import { addThemeToDB, getThemesFromDB } from '../../firebase/themes';
import Modal from "react-modal";

// import Header from '../../components/Header';
// import GenericModal from '../../components/GenericModal';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { Container,
    Form,
    Input,
    Button,
    Label,
    Select,
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
  const [answer, setAnswer] = useState('');
  const [questionExplanation, setQuestionExplanation] = useState<string>('');
  const [theme, setTheme] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  
  const [tagInput, setTagInput] = useState('');
  // const [dbTags, setDbTags] = useState<string[]>([]);
  const [questionTags, setQuestionTags] = useState<string[]>([]);
  const [dbTags, setDbTags] = useState([]);
  const [modalSearchTag, setModalSearchTag] = useState('');
  const [dbTagChange, setDbTagChange] = useState(false);

  const [levels, setLevels] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);


  const [dbThemes, setDbThemes] = useState<string[]>([]);



  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    // setModalModeUpdate(false)
    // setTask(schedule);
  }

  function addAnswer(): void {
    const newAnswer: IAnswer = { answer, correct: isCorrect };
    setAnswers([...answers, newAnswer]);    
    setAnswer('');
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
    // setDbTags(['teste', 'teste2']);
    getTagsFromDB().then((tags) => {
      setDbTags(tags);
    });
  }, []);

  /**
   * Depois de inserir um novo tag, atualiza a lista de tags
   */
  // useEffect(() => {
  //   getTagsFromDB().then((tags) => {
  //     setDbTags(tags);
  //   });
  // }, [dbTags]);

  /**
   * Alternativa ao useEffect acima porem com o listener da chamada da função setAddTagToDB
   */

  useEffect(() => {
    getTagsFromDB().then((tags) => {
      // Remover os tags que foram adicionados a questão
      const dbTags = tags.filter(({tag}) => !questionTags.includes(tag));
      setDbTags(dbTags);
    });
  }, [dbTagChange]);

  /**
   * temporareamente desabilitado
   */
   
  // useEffect(() => {
  //   setDbThemes(['teste', 'teste2']);
  //   // getThemesFromDB().then((themes) => {
  //   //   setDbThemes(themes);
  //   // });
  // }, []);

  const handleQueryAddInput = ({target} : any) => {
    const { value, name } = target;
    // if (name === 'title') {
    //   setTask({...task, title: value });
    // }
    setQueryAdd({...queryAdd, [name]: value });
  };

  const setDefault = () => {
    setQueryAdd(initialQuery);
    setAnswers([]);
    setQuestionTags([]);
    setThemes([]);
  }

  const handleSubmit = () => {
    console.log('handleSubmit');
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
    console.log('removeTag', index, tag);
    console.log('dbTags', dbTags);
    
    
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
    setQueryAdd({...queryAdd, explanations: [...queryAdd.explanations, questionExplanation]});
    setQuestionExplanation('');
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
            <Input 
              type="text"
              name="category"
              value={queryAdd.category}
              onChange={handleQueryAddInput}
            />
          </Label>
          <Label htmlFor='difficulty'>
            Difficulty:
            <Input
              type="text"
              name="difficulty"
              value={queryAdd.difficulty}
              onChange={handleQueryAddInput}
            />
          </Label>
          <Label htmlFor='type'>
            Type:
            <Input
              type="text"
              name="type"
              value={queryAdd.type}
              onChange={handleQueryAddInput}
            />
          </Label>
          <Label htmlFor='level'>
            Level:
            <Select
              // type="text"
              name="level"
              value={queryAdd.level}
              onChange={handleQueryAddInput}
            />
          </Label>
        </BoxSetup>
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
        <BoxCards>
          <Label htmlFor='explanations'>
            Explanations:
          </Label>
            {
              queryAdd.explanations.map((explanation, index) => (
                <ListCard key={index}>
                  <div>{explanation}</div>
                  <div><p onClick={() => removeExplanation(index)} >x</p></div>
                </ListCard>
              ))
            }
          {/* <Button
              type="button"
              onClick={() => addAnswer()}
            >
              Add Answers
          </Button>       */}
        </BoxCards>
        
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

          <Button onClick={openModal}>Adicionar tag no modal</Button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              // closeTimeoutMS={10000}
              onRequestClose={closeModal}
              contentLabel="Add Answer"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <h1>Tags</h1>
              <div>
                <Label htmlFor='tagsInput'>
                  Tags:
                <Input
                  type="text"
                  name="tagsInput"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  />
                </Label>
                {/* <Label htmlFor='search questionTags'>
                  Search Tags:
                <Input
                  type="text"
                  name="search_tag"
                  value={modalSearchTag}
                  // onChange={(e) => setModalSearchTag(e.target.value)}
                  // onChange={handleSearchTag}
                  />
                </Label> */}
                <Button
                    type="button"
                    onClick={() => setAddTagToDB()}
                  >
                    Adicionar Tag ao DB
                </Button>
                <TagContainer>
                  {dbTags?.map(({tag}, index) => (
                    <TagWrapper key={index}>
                      <TagLeft
                        onClick={() => addTagToQuestion(tag)}  
                      >{tag}</TagLeft>
                      <TagRight
                        onClick={() => setRemoveTagFromDB(index)}
                      ><p>x</p></TagRight>
                      {/* <div>E</div> */}
                      {/* <p onClick={() => removeTag(index)} >x</p> */}
                    </TagWrapper>
                  ))}
                </TagContainer>
              </div>              
              <Button className="modal-close" onClick={closeModal}>close</Button>
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

      <BoxAdd>
        <Label htmlFor='explanations'>
          Explanation:
        <Input
          type="text"
          name="explanation"
          value={questionExplanation}
          onChange={(e) => setQuestionExplanation(e.target.value)}
          />
        </Label>
        <Button
            type="button"
            onClick={() => addQuestionExplanation()}
          >
            Adicionar Explicação
        </Button>   
      </BoxAdd>

      <BoxAdd>
        <Label htmlFor='answers'>
          Answers:
        <Input
          type="text"
          name="answers"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
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
          {/* <Label htmlFor='search questionTags'>
            Search Tags:
          <Input
            type="text"
            name="search_tag"
            value={modalSearchTag}
            // onChange={(e) => setModalSearchTag(e.target.value)}
            // onChange={handleSearchTag}
            />
          </Label> */}
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
                ><p>x</p></TagRight>
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
