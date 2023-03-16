import React, {useState} from 'react';
import { Container, TagWrapper, TagLeft, TagRight } from './styles';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import AddInputArea from '../../GenericAddInputArea';
import AnswerAddInputArea from '../TagAddInputArea';


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