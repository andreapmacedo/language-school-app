import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import GenericTextarea from '../../Bricks/GenericTextarea';


interface Props {
  setInputQuestionExplanation: (e: string) => void;
  text?: string;
  inputQuestionExplanation: string;
}

const CollapsedTextarea: React.FC<Props> = ({ 
  setInputQuestionExplanation,
  inputQuestionExplanation  }) => {

  return (
    <Container>
      <GenericLabel text='Explanation:' />
      <GenericTextarea
        name="explanation"
        value={inputQuestionExplanation}
        onChange={setInputQuestionExplanation}
      />
    </Container>
  );
};

export default CollapsedTextarea;