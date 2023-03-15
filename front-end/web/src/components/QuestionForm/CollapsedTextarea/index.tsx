import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import GenericTextarea from '../../Bricks/GenericTextarea';


interface Props {
  setInputExplanation: (e: string) => void;
  text?: string;
  inputExplanation: string;
}

const CollapsedTextarea: React.FC<Props> = ({ 
  setInputExplanation,
  inputExplanation  }) => {

  return (
    <Container>
      <GenericLabel text='Explanation:' />
      <GenericTextarea
        name="explanation"
        value={inputExplanation}
        onChange={setInputExplanation}
      />
    </Container>
  );
};

export default CollapsedTextarea;