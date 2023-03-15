import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent, ControllerPanel } from './styles';
import TrashButton from '../../Bricks/Buttons/TrashButton';
import EditButton from '../../Bricks/Buttons/EditButton';
import CancelButton from '../../Bricks/Buttons/CancelButton';
import AddButton from '../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import AddInputArea from '../GenericAddInputArea';
import AnswerAddInputArea from '../AnswerAddInputArea';


interface Props {
  listAnswers: object[];
  inputAnswer: string;
  setInputAnswer: (e: string) => void;
  addAnswer: () => void;
  removeAnswer: (index: number) => void;
  setIsCorrect: (e: boolean) => void;
  isCorrect: boolean;
}

const AnswerArea: React.FC<Props> = ({
  listAnswers,
  inputAnswer,
  setInputAnswer,
  addAnswer,
  removeAnswer,
  setIsCorrect,
  isCorrect
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        listAnswers?.map(({answer}, index) => (
          <CardContent key={index} >
            <p>{answer}</p>
            <div>
              <EditButton 
                onClick={() => removeAnswer(index)}
              />
              <TrashButton 
                onClick={() => removeAnswer(index)}
              />
            </div>
          </CardContent>
        ))
      }
    </Container>
  );
};

export default AnswerArea;