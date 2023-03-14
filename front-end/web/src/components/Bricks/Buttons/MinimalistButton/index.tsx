import React from 'react';
import { IconType } from 'react-icons';
import { Wrapper, Container } from './styles';

interface Props {
  onClick: () => void;
  text: string;
  icon?: IconType;
  disabled?: boolean;
}

const MinimalistButton: React.FC<Props> = ({ 
  onClick,
  text,
  disabled,
  icon: Icon }) => {
  return (
    <Wrapper>
      <Container onClick={onClick}>
        {Icon && <Icon className='icon'/>}
        {text}
      </Container>
    </Wrapper>
  );
};

export default MinimalistButton;