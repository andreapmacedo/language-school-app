import React from 'react';
import { Container } from './styles';
import { CiEdit } from 'react-icons/ci';

interface Props {
  onClick: () => void;
  text?: string;
  color?: string;
  size?: number;
}

const TrashButton: React.FC<Props> = ({ onClick, text, color, size }) => {
  return (
    <Container onClick={onClick}>
      <CiEdit 
        size={size || 18}
        color={color || '#5a66d1'}
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

export default TrashButton;