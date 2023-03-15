import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import GenericTextarea from '../../Bricks/GenericTextarea';

interface Props {
  setInput: (e: string) => void;
  text?: string;
  input: string;
  name: string;
  setIsCorrect: (e: boolean) => void;
  isCorrect: boolean;
}

const AnswerAddInputArea: React.FC<Props> = ({ 
  setInput,
  input,
  name,
  text,
  setIsCorrect,
  isCorrect
}) => {

  return (
    <Container>
      <GenericLabel text={text || ''} />
      <GenericTextarea
        name={name}
        value={input}
        onChange={setInput}
      />
      <label htmlFor="isCorrect" >
        Correct answer
        <input
          type="checkbox"
          name="isCorrect"
          onChange={ () => setIsCorrect(!isCorrect) }
          // checked={ !isCorrect }
        />
      </label>
    </Container>
  );
};

export default AnswerAddInputArea;