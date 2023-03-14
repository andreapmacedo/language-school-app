import React from 'react';
import { Container } from './styles';

interface Props {
  onChange: (e: string) => void;
  value: string;
  type?: string;
  name: string;
}

const GenericInput: React.FC<Props> = ({ 
  onChange,
  value,
  name,
  type,
 }) => {

  return (
    <Container
      type={type || 'text'}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />  
  );
};

export default GenericInput;