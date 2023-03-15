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
  // listAnswers: object[];
  // inputAnswer: string;
  // setInputAnswer: (e: string) => void;
  // addAnswer: () => void;
  // removeAnswer: (index: number) => void;
  // setIsCorrect: (e: boolean) => void;
  // isCorrect: boolean;
  answer: object;
}

const AnswerCard: React.FC<Props> = ({
  answer
}) => {


  return (

    

    <Container>
      {
        <CardContent>
          <p>{answer.answer}</p>
          {/* <div>
            <EditButton 
              onClick={() => removeAnswer(index)}
            />
            <TrashButton 
              onClick={() => removeAnswer(index)}
            />
          </div> */}
          {answer.correct && <p>Correct</p>}
        </CardContent>
      }
    </Container>
  );
};

export default AnswerCard;