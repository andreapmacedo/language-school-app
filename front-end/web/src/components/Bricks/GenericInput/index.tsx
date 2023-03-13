import React from 'react';
import { Container } from './styles';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const GenericInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <Container >
      {value}
    </Container>
  );
};

export default GenericInput;