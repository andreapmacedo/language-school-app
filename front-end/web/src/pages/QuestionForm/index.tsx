import { useState, useEffect } from 'react';
import { addQuestion } from '../../firebase/questions';
import { addTagToDB, getTagsFromDB } from '../../firebase/tags';
import { addThemeToDB, getThemesFromDB } from '../../firebase/themes';
import Modal from "react-modal";

// import Header from '../../components/Header';
// import GenericModal from '../../components/GenericModal';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { Container, Form } from './styles';

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
  const [tag, setTag] = useState('');
  const [theme, setTheme] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [dbTags, setDbTags] = useState<string[]>([]);
  const [dbThemes, setDbThemes] = useState<string[]>([]);

  const [modalSearchTag, setModalSearchTag] = useState('');


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

  function addTagToQuestion(): void {
    setTags([...tags, tag]);
    // addTagToDB({tag});
    // setTag('');
  }

  function addTagToData(): void {
    addTagToDB({tag});
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

  useEffect(() => {
    updateQuery({
      ...queryAdd,
      answers: answers.map((ans) => ans),
      // answers: answers.map((ans) => ans.answer),
    });
  }, [answers]);

  useEffect(() => {
    updateQuery({
      ...queryAdd,
      themes: themes.map((theme) => theme)
    });
  }, [themes]);

  useEffect(() => {
    updateQuery({
      ...queryAdd,
      tags: tags.map((tag) => tag)
    });
  }, [tags]);

  /**
   * Get tags from DB when component is mounted
   */
  useEffect(() => {
    getTagsFromDB().then((tags) => {
      setDbTags(tags);
    });
  }, []);

  // useEffect(() => {
  //   getTagsFromDB().then((tags) => {
  //     setDbTags(tags);
  //   });
  // }, [addTagToData]);

  useEffect(() => {
    getThemesFromDB().then((themes) => {
      setDbThemes(themes);
    });
  }, []);

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
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  const removeTheme = (index: number) => {
    const newTheme = [...themes];
    newTheme.splice(index, 1);
    setThemes(newTheme);
  }


  const handleSearchTag = (e: any) => {
    setModalSearchTag(e.target.value);
    // dbTags.filter((tag) => tag.includes(modalSearchTag));
    // setDbTags(dbTags.filter(({tag}) => tag.includes(modalSearchTag)));

  }
  


  return (
    
    <Container>
    {/* //   <Header /> */}
      <Form
        // onSubmit={handleSubmit}
      >

        <label htmlFor='question'>
          Question:
          <input
            type="text"
            name="question"
            value={queryAdd.question}
            onChange={handleQueryAddInput}
          />
        </label>

        <div>
          <label htmlFor='category'>
            Category:
            <input 
              type="text"
              name="category"
              value={queryAdd.category}
              onChange={handleQueryAddInput}
            />
          </label>
          <label htmlFor='difficulty'>
            Difficulty:
            <input
              type="text"
              name="difficulty"
              value={queryAdd.difficulty}
              onChange={handleQueryAddInput}
            />
          </label>
          <label htmlFor='type'>
            Type:
            <input
              type="text"
              name="type"
              value={queryAdd.type}
              onChange={handleQueryAddInput}
            />
          </label>
          <label htmlFor='level'>
            Level:
            <input
              type="text"
              name="level"
              value={queryAdd.level}
              onChange={handleQueryAddInput}
            />
          </label>
        </div>
        <div>
          <label htmlFor='answers'>
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
          </label>
          <button
              type="button"
              onClick={() => addAnswer()}
            >
              Add Answers
          </button>      
        </div>
        
        <div>
          <label htmlFor='tags'>
            Tags:
          {
            tags.map((tag, index) => (
              <div key={index}>
                <p>{tag}</p>
                <p onClick={() => removeTag(index)} >x</p>
              </div>
            ))
          }
          </label>
          <button
              type="button"
              onClick={() => addTagToQuestion()}
            >
              Add tags
          </button>        

          <button onClick={openModal}>Adicionar tag no modal</button>
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
                <label htmlFor='tags'>
                  Tags:
                <input
                  type="text"
                  name="tags"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  />
                </label>
                <label htmlFor='search tags'>
                  Search Tags:
                <input
                  type="text"
                  name="search_tag"
                  value={modalSearchTag}
                  // onChange={(e) => setModalSearchTag(e.target.value)}
                  // onChange={handleSearchTag}
                  />
                </label>
                <button
                    type="button"
                    onClick={() => addTagToData()}
                  >
                    Adicionar Tag
                </button>
                <div>
                  {dbTags?.map(({tag}, index) => (
                    <div key={index}>
                      <p>{tag}</p>
                      {/* <p onClick={() => removeTag(index)} >x</p> */}
                    </div>
                  ))}
                </div>
              </div>              
              <button className="modal-close" onClick={closeModal}>close</button>
            </Modal>
          </div>


        </div>
        <div>
          <label htmlFor='themes'>
            Themes:
            {
            themes.map((theme, index) => (
              <div key={index}>
                <p>{theme}</p>
                <p onClick={() => removeTheme(index)} >x</p>
              </div>
            ))
          }
          <button
            type="button"
            onClick={() => addTheme()}
          >
            Add themes
          </button>    
          </label>
        </div>
        
          {/* <GenericModal></GenericModal> */}

        <button
          type="button"
          onClick={handleSubmit}
        >
          Adicionar Questão
        </button>        

        {/* <button
         type="submit"
        >
          Adicionar Questão
        </button> */}

      </Form>











      <div>
        <label htmlFor='answers'>
          Answers:
        <input
          type="text"
          name="answers"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <div>
          <label htmlFor="isCorrect" >
            Resposta correta
            <input
              type="checkbox"
              name="isCorrect"
              onChange={ () => setIsCorrect(!isCorrect) }
              checked={ isCorrect }
            />
          </label>
        </div>        

        <button
            type="button"
            onClick={() => addAnswer()}
          >
            Adicionar Resposta
        </button>        
      </div>
      <div>
        <label htmlFor='themes'>
          Themes:
        <input
          type="text"
          name="themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          />
        </label>
        <button
            type="button"
            onClick={() => addTheme()}
          >
            Adicionar Tema
        </button>        
      </div>
      {/* <div>
        <label htmlFor='tags'>
          Tags:
        <input
          type="text"
          name="tags"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          />
        </label>
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
