import React from 'react';
import { Container } from './styles';
import { MdAddCircleOutline } from 'react-icons/md';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const AddButton: React.FC<Props> = ({
  onClick,
  text,
  color,
  size,
  disabled }) => {

  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      style={{ color: color || '#eee' }} 
    >
      <MdAddCircleOutline 
        size={size || 18}
        // color={color || '#eee'}
      /> 
      {text && text}
    </Container>    
  );
};

export default AddButton;

