import React from 'react';
import { Container } from './styles';

interface Props {
  onChange: (e: string) => void;
  value: string;
  name: string;
}

const GenericTextarea: React.FC<Props> = ({ 
  onChange,
  value,
  name,
 }) => {

  return (
    <Container
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />  
  );
};

export default GenericTextarea;