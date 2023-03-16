import React from 'react';
import { Container } from './styles';

interface Props {
  onChange: () => void;
  value: string;
  name: string;
}

const GenericControledTextarea: React.FC<Props> = ({ 
  onChange,
  value,
  name,
 }) => {

  return (
    <Container
      name={name}
      onChange={onChange}
      value={value}
    />  
  );
};

export default GenericControledTextarea;