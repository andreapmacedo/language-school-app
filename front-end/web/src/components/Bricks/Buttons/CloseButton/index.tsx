import React from 'react';
import { Container } from './styles';
import { IoCloseCircle } from 'react-icons/io5';

interface ButtonProps {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
}

const CloseButton: React.FC<ButtonProps> = ({ onClick, text, color, size }) => {
  return (
    <Container onClick={onClick}>
      <IoCloseCircle 
        size={size || 28}
        color={color || '#bbb'}
        style={{
          // color:  "#5ac9d1",
          // backgroundColor : '#000000',
          // padding:  '30px'
        }}
      
      /> 
      {text && text}
    </Container>
  );
};

export default CloseButton;