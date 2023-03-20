import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../../Bricks/GenericLabel';
import GenericTextarea from '../../../Bricks/GenericTextarea';


interface Props {
  setInput: (e: string) => void;
  text?: string;
  input: string;
  name: string;
}

const GenericAddInputArea: React.FC<Props> = ({ 
  setInput,
  input,
  name,
  text
}) => {

  return (
    <Container>
      <GenericLabel text={text || ''} />
      <GenericTextarea
        name={name}
        value={input}
        onChange={setInput}
      />
    </Container>
  );
};

export default GenericAddInputArea;