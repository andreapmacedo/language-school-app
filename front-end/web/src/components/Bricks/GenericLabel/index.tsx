import React from 'react';
import { Container } from './styles';

interface Props {
  text: string;
}

const GenericLabel: React.FC<Props> = ({ text }) => {
  return (
    <Container
      htmlFor={text}
    >
      {text}
    </Container>
  );
};

export default GenericLabel;