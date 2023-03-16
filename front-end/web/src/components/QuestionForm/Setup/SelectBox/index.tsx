import React from 'react';
import { Container } from './styles';
import GenericLabel from '../../../Bricks/GenericLabel';



interface Props {
  setInput: (e: string) => void;
  text?: string;
  input: string;
  name: string;
}

const SelectBox: React.FC<Props> = ({ 
  setInput,
  input,
  name,
  text
}) => {

  return (
    <Container>
      <GenericLabel text={text || ''} />
      
    </Container>
  );
};

export default SelectBox;