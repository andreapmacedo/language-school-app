import React from 'react';
import { Container } from './styles';
import { IoMdAddCircle } from 'react-icons/io';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const AddButton: React.FC<Props> = ({ onClick, text, color, size, disabled }) => {
  return (
    <Container
    onClick={onClick}
    disabled={disabled}
    >
      <IoMdAddCircle 
        size={size || 28}
        color={color || '#5ac9d1'}
        // style={{
        //   color:  "#5ac9d1",
        //   // backgroundColor : '#000000',
        //   // padding:  '30px'
        // }}
      
      /> 
      {text && text}
    </Container>
  );
};

export default AddButton;