import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent, ControllerPanel } from './styles';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import AddInputArea from '../../GenericAddInputArea';
import AnswerAddInputArea from '../AnswerAddInputArea';


interface Props {
  removeAnswer: (index: number) => void;
  answer: object;
  index: number;
}

const AnswerCard: React.FC<Props> = ({
  answer,
  removeAnswer,
  index
}) => {

  return (
    <Container>
      {
        <CardContent>
          <p>{answer.answer}</p>
          <div>
            {answer.correct && <p>Correct</p>}
            <EditButton 
              onClick={() => removeAnswer(index)}
            />
            <TrashButton 
              onClick={() => removeAnswer(index)}
            />
          </div>
        </CardContent>
      }
    </Container>
  );
};

export default AnswerCard;