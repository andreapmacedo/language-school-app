import React from 'react';
import { Container, Button } from './styles';
import { IconType } from 'react-icons';

interface Props {
  onClick: () => void;
  icon?: IconType;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  textColor?: string; // define a cor do texto
}

const GenericButton: React.FC<Props> = ({
  onClick,
  text,
  color,
  size,
  textColor = '#3a77ff', // define a cor padrão do texto
  icon: Icon, 
  disabled 
}) => {

  return (
    <Container>
      <Button
        onClick={onClick}
        disabled={disabled}
        textColor={textColor} // passa a cor do texto para o CSS
        // style={{ color: color || '#eee' }} 
      >
        {Icon && <Icon className='icon'/>}
        {text && text}
      </Button>    
    </Container>
  );
};

export default GenericButton;

