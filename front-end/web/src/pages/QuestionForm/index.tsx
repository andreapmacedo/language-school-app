import { useState, useEffect } from 'react';
import { addQuestion } from '../../firebase/questions';
import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../firebase/tags';

import GenericControledTextarea from '../../components/Bricks/GenericControledTextarea';
import ExplanationContent from '../../components/QuestionForm/Explanation/ExplanationContent';
import AnswerContent from '../../components/QuestionForm/Answer/AnswerContent';
import TagContent from '../../components/QuestionForm/Tags/TagContent';
import SetupContent from '../../components/QuestionForm/Setup/SetupContent';

import { 
  Container,
  Form,
  Button,
  Label,
  QuestionContent,
  } from './styles';

import { IQuestionQuery } from '../../interfaces';

const QuestionForm = () => {
  
  const initialQuery: IQuestionQuery = {
    question: '',
    answers: [],
    explanations: [],
    tags: [],
    category: '',
    difficulty: '',
    type: '',
    level: '',
  };

  const [queryAdd, setQueryAdd] = useState(initialQuery); 
  const [questionTags, setQuestionTags] = useState<string[]>([]);
  const [dbTags, setDbTags] = useState([]);
  
  const [dbTagChange, setDbTagChange] = useState(false);

  const [questionAdded, setQuestionAdded] = useState(false);


  // function addTagToQuestion(tagToAdd: string): void {
  //   setQuestionTags([...questionTags, tagToAdd]);
  //   setDbTags(dbTags.filter(({tag}) => tag !== tagToAdd));
  // }

  // function setAddTagToDB(): void {
  //   if(tagInput === '') return;
  //   if(dbTags.find(({tag}) => tag === tagInput)) {
  //     alert('Tag already exists');
  //     return;
  //   }
  //   if(questionTags.find((qt) => qt === tagInput)) {
  //     alert('Tag already exists in question');
  //     return;
  //   }
  //   addTagToDB({tag: tagInput});    
  //   setDbTagChange(!dbTagChange);
    
  //   // getTagsFromDB().then((tags) => {
  //   //   setDbTags(tags);
  //   // });
  //   setTagInput('');
  // }

  function validateInputs() {

    if (queryAdd.question === '') {
      alert('Please enter an question');
      return false;
    }
    if (queryAdd.answers.filter((ans) => ans.correct).length === 0 ) {      
      alert('Please enter the correct answer');
      return false;
    }
    if (queryAdd.answers.length < 2) {
      alert('Please enter at least two answers');
      return false;
    }
    /*
    * usar para manipular dentro dos componentes filhos um useEffect para resetar o estado
    */
    setQuestionAdded(!questionAdded);
    return true;
  }

  function updateQuery(query: IQuestionQuery) {
    setQueryAdd(query);
  }


  // useEffect(() => {
  //   updateQuery({
  //     ...queryAdd,
  //     tags: questionTags.map((tag) => tag)
  //   });
  // }, [questionTags]);

  /**
   * Get tags from DB when component is mounted
   */
  // useEffect(() => {
  //   getTagsFromDB().then((tags) => {
  //     setDbTags(tags);
  //   });
  // }, []); 

  /*
  quando adiciona uma tag aod db, recarrega as tags do db
  */
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
  }

  const handleSubmit = () => {
    if (validateInputs()) {
      addQuestion(queryAdd);
      setDefault();
    }
  }
  
  // const removeTag = (index: number, tag: string) => {
  //   // console.log('removeTag', index, tag);
  //   // console.log('dbTags', dbTags);
    
    
  //   // alerta com confirmação
  //   // if (window.confirm('Are you sure you wish to delete this item?')) {
  //     const newTags = [...questionTags];
  //     newTags.splice(index, 1);
  //     setQuestionTags(newTags);
  //     setDbTags([...dbTags, {tag}]);
  //   // }
  // }

  // const setRemoveTagFromDB = (index: number) => {
  //   // alerta com confirmação
  //   if (window.confirm('Are you sure you wish to delete this item?')) {
      
  //     const { id } = dbTags[index];
  //     removeTagFromDB(id);
  //     const newTags = [...dbTags];
  //     newTags.splice(index, 1);
  //     setDbTags(newTags);
  //   }
  // }

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
        </QuestionContent>

        <SetupContent
          onChange={handleSelectInput}
        />

        <AnswerContent
          updateQuery={updateQuery}
          queryAdd={queryAdd}
          questionAdded={questionAdded}
        />

        <ExplanationContent
          updateQuery={updateQuery}
          queryAdd={queryAdd}
          questionAdded={questionAdded}
        />

        <TagContent 
          updateQuery={updateQuery}
          queryAdd={queryAdd}
          questionAdded={questionAdded}
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
