import React, {useState} from 'react';
import { Container, TagWrapper, TagLeft, TagRight } from './styles';



interface Props {
  questionTags: string[];
  removeTag: (index: number, tag: string) => void;
}

const TagList: React.FC<Props> = ({
questionTags,
removeTag,
}) => {

  return (
    <Container>
      {questionTags.map((tag, index) => (
      <TagWrapper key={index}>
        <TagLeft>{tag}</TagLeft>
        <TagRight><p onClick={() => removeTag(index, tag)} >x</p></TagRight>
      </TagWrapper>
      ))}      
    </Container>
  );
};

export default TagList;