import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface ButtonProps {
  onClick: () => void;
  text: string;
  icon?: IconType;
}

const GenericButton: React.FC<ButtonProps> = ({ onClick, text, icon: Icon }) => {
  return (
    <Container onClick={onClick}>
      {Icon && <Icon className='icon'/>}
      {text}
    </Container>
  );
};

export default GenericButton;