import React from 'react';
import { Container } from './styles';
import { GiCancel } from 'react-icons/gi';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const CancelButton: React.FC<Props> = ({
  onClick,
  text,
  color,
  size,
  disabled }) => {

  return (
    <>
      <Container
        onClick={onClick}
        disabled={disabled || false}
      >
        <GiCancel
          className='icon' 
          size={size || 18}
          // color={color || 'green'}
        /> 
        {text && text}
      </Container>
    </>
  );
};

export default CancelButton;