import React from 'react';
import { Container } from './styles';
import { IconType } from 'react-icons';

interface Props {
  onClick: () => void;
  icon?: IconType;
  text?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

const GenericButton: React.FC<Props> = ({
  onClick,
  text,
  color,
  size,
  icon: Icon, 
  disabled }) => {

  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      style={{ color: color || '#eee' }} 
    >
      {/* <MdAddCircleOutline 
        size={size || 18}
        // color={color || '#eee'}
      />  */}
      {Icon && <Icon className='icon'/>}
      {text && text}
    </Container>    
  );
};

export default GenericButton;

