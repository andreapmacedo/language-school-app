import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import GenericTextarea from '../../Bricks/GenericTextarea';


interface Props {
  setQuestionExplanation: (e: string) => void;
  text?: string;
  questionExplanation: string;
}

const CollapsedTextarea: React.FC<Props> = ({ 
  setQuestionExplanation,
  questionExplanation  }) => {

  return (
    <Container>
      <GenericLabel text='Explanation:' />
      <GenericTextarea
        name="explanation"
        value={questionExplanation}
        onChange={setQuestionExplanation}
      />
    </Container>
  );
};

export default CollapsedTextarea;