import React, {useState} from 'react';
import { Container, TagWrapper, TagLeft, TagRight } from './styles';



interface Props {
  tag: string;
  index: number;
  add?: (tag: string) => void;
  remove?: (index: number, tag: string) => void;
  
}

const Tag: React.FC<Props> = ({
  tag,
  index,
  add,
  remove,
}) => {

  return (
    <Container>      
      <TagWrapper>
        <TagLeft>{tag}</TagLeft>
        { remove && <TagRight><p onClick={() => remove(index, tag)} >x</p></TagRight> }
      </TagWrapper>
    </Container>
  );
};

export default Tag;