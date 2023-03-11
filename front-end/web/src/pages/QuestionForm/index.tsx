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
    TagLeft,
    TagRight,
  } from './styles';

import { IQuestionQuery, IAnswer } from '../../interfaces';

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
  const [theme, setTheme] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  // const [dbTags, setDbTags] = useState<string[]>([]);
  const [dbTags, setDbTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [modalSearchTag, setModalSearchTag] = useState('');

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

  function addTagToQuestion(tagAdd): void {
    setTags([...tags, tagAdd]);
    setDbTags(dbTags.filter(({tag}) => tag !== tagAdd));
  }

  function addTagToData(): void {
    // setDbTags([...dbTags, tag]);
    addTagToDB({tag});
    getTagsFromDB().then((tags) => {
      setDbTags(tags);
    });
    setTag('');
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
   * Alternativa ao useEffect acima porem com o listener da chamada da função addTagToData
   */

  // useEffect(() => {
  //   getTagsFromDB().then((tags) => {
  //     setDbTags(tags);
  //   });
  // }, [addTagToData]);

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
    setTags([]);
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
  
  const removeTag = (index: number) => {
    // alerta com confirmação
    // if (window.confirm('Are you sure you wish to delete this item?')) {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
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



  const removeTheme = (index: number) => {
    const newTheme = [...themes];
    newTheme.splice(index, 1);
    setThemes(newTheme);
  }


  const handleSearchTag = (e: any) => {
    setModalSearchTag(e.target.value);
    dbTags.filter((tag) => tag.includes(modalSearchTag));
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
          <Button
              type="button"
              onClick={() => addAnswer()}
            >
              Add Answers
          </Button>      
        </BoxTags>
        
        <BoxTags>
          <Label htmlFor='tags'>
            Tags:
          {
            tags.map((tag, index) => (
              <div key={index}>
                <p>{tag}</p>
                <p onClick={() => removeTag(index)} >x</p>
              </div>
            ))
          }
          </Label>
          {/* <Button
              type="button"
              onClick={() => addTagToQuestion()}
            >
              Add tags
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
              <h1>Adicionar tag</h1>
              <div>
                <Label htmlFor='tags'>
                  Tags:
                <Input
                  type="text"
                  name="tags"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  />
                </Label>
                {/* <Label htmlFor='search tags'>
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
                    onClick={() => addTagToData()}
                  >
                    Adicionar Tag
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
        <BoxTags>
          <Label htmlFor='themes'>
            Themes:
            {
            themes.map((theme, index) => (
              <TagWrapper key={index}>
                <p>{theme}</p>
                <p onClick={() => removeTheme(index)} >x</p>
              </TagWrapper>
            ))
          }
          <Button
            type="button"
            onClick={() => addTheme()}
          >
            Add themes
          </Button>    
          </Label>
        </BoxTags>
        
          {/* <GenericModal></GenericModal> */}

        <Button
          type="button"
          onClick={handleSubmit}
        >
          Adicionar Questão
        </Button>        

        {/* <button
         type="submit"
        >
          Adicionar Questão
        </button> */}

      </Form>











      <div>
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
      </div>
      <div>
        <Label htmlFor='themes'>
          Themes:
        <Input
          type="text"
          name="themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          />
        </Label>
        <Button
            type="button"
            onClick={() => addTheme()}
          >
            Adicionar Tema
        </Button>        
      </div>
      {/* <div>
        <Label htmlFor='tags'>
          Tags:
        <Input
          type="text"
          name="tags"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          />
        </Label>
        <button
            type="button"
            onClick={() => addTagToQuestion()}
          >
            Adicionar Tag
        </button>        
      </div> */}
    </Container>
  );
}

export default QuestionForm;
