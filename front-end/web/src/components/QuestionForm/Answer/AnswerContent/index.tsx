import React, {useState, useEffect} from 'react';
import { Container, CollapsedContent, ControllerPanel } from './styles';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import AnswerAddInputArea from '../AnswerAddInputArea';
import AnswerCard from '../AnswerCard';

import { IAnswer } from '../../../../interfaces';

interface Props {
  updateQuery: (query: any) => void;
  queryAdd: object;
  questionAdded: boolean;
}

const AnswerContent: React.FC<Props> = ({
  updateQuery,
  queryAdd,
  questionAdded,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [inputAnswer, setInputAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  // function validateInputs() {
    
  //   if (answers.length < 2) {
  //     alert('Please enter at least two answers');
  //     return false;
  //   }
  //   if (answers.filter((ans) => ans.correct).length === 0 ) {      
  //     alert('Please enter the correct answer');
  //     return false;
  //   }
  //   return true;
  // }


  function addAnswer(): void {
    const newAnswer: IAnswer = { answer: inputAnswer, correct: isCorrect };
    setAnswers([...answers, newAnswer]);    
    setInputAnswer('');
  }

  const removeAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);
  }

  // const setDefault = () => {
  //   setAnswers([]);
  // }

  useEffect(() => {
    setAnswers([]);
  }, [questionAdded]);


  useEffect(() => {
    updateQuery({
      ...queryAdd,
      answers: answers.map((ans) => ans),
    });
  }, [answers]);


  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setInputAnswer(''); 
  }

  const addOnClickHandler = () => {
    addAnswer();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Container>
      {!isCollapsed &&
        <AddButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          text='Add Answer'
          color='#eee'
        />
      }
        {isCollapsed &&
          <CollapsedContent>
            <AnswerAddInputArea
              setInput={setInputAnswer}     
              input={inputAnswer}
              name='answer'
              text='Answer:'
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
            />
            <ControllerPanel>
              <GenericButton
                disabled={inputAnswer.length === 0} 
                onClick={addOnClickHandler}
                text='add'
                icon={GiCheckMark}
              />
              <CancelButton
                onClick={cancelOnClickHandler}
                text='cancel'
              />
            </ControllerPanel>
          
          </CollapsedContent>
        }
      {        
        answers?.map((answer, index) => (          
          <AnswerCard
            key={index}
            index={index}
            answer={answer}
            removeAnswer={removeAnswer}
          />
        ))
      }
    </Container>
  );
};

export default AnswerContent;