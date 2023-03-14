import React from 'react';
import { Container } from './styles';
import { GiConfirmed } from 'react-icons/gi';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const ConfirmButton: React.FC<Props> = ({ onClick,
  text,
  color,
  size,
  disabled }) => {

  return (
    <>
      {!disabled ?
        <Container onClick={onClick}>
          <GiConfirmed 
            size={size || 18}
            color={color || 'green'}
          /> 
          {text && text}
        </Container>
        :
        <Container>
          <GiConfirmed 
            size={size || 18}
            color={color || 'grey'}
          /> 
          {text && text}
        </Container>        
        }
    </>
  );
};

export default ConfirmButton;