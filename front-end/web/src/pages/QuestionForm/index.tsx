import { useState, useEffect } from 'react';
import { addQuestion } from '../../firebase/questions';
import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../firebase/tags';
import { addThemeToDB, getThemesFromDB } from '../../firebase/themes';
import Select from '../../components/Bricks/Select';
import AddButton from '../../components/Bricks/Buttons/AddButton';
import CloseButton from '../../components/Bricks/Buttons/CloseButton';
import GenericControledTextarea from '../../components/Bricks/GenericControledTextarea';
import Modal from "react-modal";
import { HiTrash } from 'react-icons/hi';
import ExplanationContent from '../../components/QuestionForm/Explanation/ExplanationContent';
import AnswerContent from '../../components/QuestionForm/Answer/AnswerContent';
import TagContent from '../../components/QuestionForm/Tags/TagContent';

// import Header from '../../components/Header';
// import GenericModal from '../../components/GenericModal';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { 
  Container,
  Form,
  Input,
  Button,
  Label,
  QuestionContent,
  SetupContent
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
  const [inputExplanation, setInputExplanation] = useState<string>('');
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
    // console.log('handleQueryAddInput', name, value);
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

  const addExplanation = () => {
    if(inputExplanation === '') return;
    setQueryAdd({...queryAdd, explanations: [...queryAdd.explanations, inputExplanation]});
    setInputExplanation('');
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
        <QuestionContent>

          <Label htmlFor='question'>
            Question:
          </Label>
          <GenericControledTextarea
            name="question"
            value={queryAdd.question}
            onChange={handleQueryAddInput}
            />
            {/* <Input
              type="text"
              name="question"
              value={queryAdd.question}
              onChange={handleQueryAddInput}
            /> */}
        </QuestionContent>


        <SetupContent>
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
        </SetupContent>


        <AnswerContent
          inputAnswer={inputAnswer}
          setInputAnswer={setInputAnswer}
          listAnswers={answers}
          addAnswer={addAnswer}
          removeAnswer={removeAnswer}
          setIsCorrect={setIsCorrect}
          isCorrect={isCorrect}
        />


        <ExplanationContent
          onClick={removeExplanation}
          list={queryAdd.explanations} 
          addExplanation={addExplanation}
          setInputExplanation={setInputExplanation}
          inputExplanation={inputExplanation}
        />
        <TagContent 
          addTagToQuestion={addTagToQuestion}
          questionTags={questionTags}
          removeTag={removeTag}
          dbTags={dbTags}
          // modalSearchTag={modalSearchTag}
          // handleSearchTag={handleSearchTag}
          tagInput={tagInput}
          setRemoveTagFromDB={setRemoveTagFromDB}
          setDbTags={setDbTags}
          setDbTagChange={setDbTagChange}
          setTagInput={setTagInput}
          setAddTagToDB={setAddTagToDB}
        />
        
        <Button
          type="button"
          onClick={handleSubmit}
        >
          Add Question
        </Button>        

      </Form>
    </Container>
  );
}

export default QuestionForm;
