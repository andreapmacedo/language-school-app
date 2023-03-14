import React from 'react';
import { Container } from './styles';
import ConfirmButton from '../../Bricks/Buttons/ConfirmButton';
import GenericInput from '../../Bricks/GenericInput';
import GenericLabel from '../../Bricks/GenericLabel';
import GenericTextarea from '../../Bricks/GenericTextarea';


interface Props {
  setQuestionExplanation: (e: string) => void;
  addQuestionExplanation: () => void;
  setIsCollapsed: (e: boolean) => void;
  isCollapsed: boolean;
  text?: string;
  questionExplanation: string;
}

const AddExplanation: React.FC<Props> = ({ 
  addQuestionExplanation,
  isCollapsed,
  setIsCollapsed,
  setQuestionExplanation,
  questionExplanation  }) => {

  const clickHandler = () => {
    addQuestionExplanation();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Container>
      <GenericLabel text='explanations:' />
        <GenericTextarea
          name="explanation"
          value={questionExplanation}
          onChange={setQuestionExplanation}
        />
      <ConfirmButton onClick={clickHandler} disabled={!questionExplanation} />       
    </Container>
  );
};

export default AddExplanation;