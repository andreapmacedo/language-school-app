import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface Props {
  onClick: () => void;
  text?: string;
  icon?: IconType;
  isCollapsed?: boolean;
  disabled?: boolean;
}

const CollapsedButton: React.FC<Props> = ({ 
  onClick,
  text,
  isCollapsed,
  disabled,
  icon: Icon }) => {
  return (
    <Container
      onClick={onClick}
      disabled={false}
    >
      {Icon && <Icon className='icon'/>}
      {/* {text = isCollapsed ? 'Cancel' : 'Add Explanation'} */}
      {!isCollapsed &&
        <p>Cancel</p>
      }      
    </Container>
  );
};

export default CollapsedButton;