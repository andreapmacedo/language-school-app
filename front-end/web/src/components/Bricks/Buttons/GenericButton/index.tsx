import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface Props {
  onClick: () => void;
  text: string;
  icon?: IconType;
  disabled?: boolean;
}

const GenericButton: React.FC<Props> = ({ 
  onClick,
  text,
  disabled,
  icon: Icon }) => {
  return (
    <Container onClick={onClick}>
      {Icon && <Icon className='icon'/>}
      {text}
    </Container>
  );
};

export default GenericButton;