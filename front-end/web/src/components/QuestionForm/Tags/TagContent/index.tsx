import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent, ControllerPanel } from './styles';
// import TrashButton from '../../../Bricks/Buttons/TrashButton';
// import EditButton from '../../../Bricks/Buttons/EditButton';
// import CancelButton from '../../../Bricks/Buttons/CancelButton';
// import AddButton from '../../../Bricks/Buttons/project/AddButton';
// import GenericButton from '../../../Bricks/Buttons/GenericButton';
// import { GiCheckMark } from 'react-icons/gi';
// import AddInputArea from '../../GenericAddInputArea';
// import AnswerAddInputArea from '../TagAddInputArea';
// import AnswerCard from '../TagCard';


interface Props {
  // listAnswers: object[];
  // inputAnswer: string;
  // setInputAnswer: (e: string) => void;
  // addAnswer: () => void;
  // removeAnswer: (index: number) => void;
  // setIsCorrect: (e: boolean) => void;
  // isCorrect: boolean;
}

const TagContent: React.FC<Props> = ({
  
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // const cancelOnClickHandler = () => {
  //   setIsCollapsed(!isCollapsed)
  //   setInputAnswer(''); 
  // }

  // const addOnClickHandler = () => {
  //   addAnswer();
  //   setIsCollapsed(!isCollapsed);
  // }

  return (
    <Container>
      
    </Container>
  );
};

export default TagContent;
