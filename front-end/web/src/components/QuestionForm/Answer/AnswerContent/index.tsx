import React, {useState, useEffect} from 'react';
import { Container, CollapsedContent, ControllerPanel } from './styles';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import AnswerAddInputArea from '../AnswerAddInputArea';
import AnswerCard from '../AnswerCard';
import CollapsedHeader from '../../../CollapsedHeader';

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

  // neste contexto esta validação está sendo feita no pai
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

  // neste contexto, o código abaixo foi substituído pelo useEffect abaixo uma vez que o gatilho está no pai.
  //   setAnswers([]);

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
    setIsCorrect(false);
  }

  return (
    <Container>
      <CollapsedHeader
        title='Add Answer'
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
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