import React from 'react';
import { Container, Button } from './styles';
import { MdAddCircleOutline } from 'react-icons/md';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  textColor?: string;
}

const AddButton: React.FC<Props> = ({
  onClick,
  text,
  color,
  size,
  disabled,
  textColor = '#3a77ff',
}) => {

  return (
    <Container>
      <Button
        onClick={onClick}
        disabled={disabled}
        textColor={textColor}
        // style={{ color: color || '#eee' }} 
      >
        <MdAddCircleOutline 
          size={size || 18}
          // color={color || '#eee'}
        /> 
        {text && text}
      </Button>
    </Container>    
  );
};

export default AddButton;

