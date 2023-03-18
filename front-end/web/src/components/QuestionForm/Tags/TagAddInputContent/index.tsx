import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import GenericInput from '../../../Bricks/GenericInput';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import AddButton from '../../../Bricks/Buttons/AddButton';
import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';
import { GiCheckMark } from 'react-icons/gi';

interface Props {
  setDbTagChange: (e: boolean) => void;
  dbTagChange: boolean;
}

const TagAddInputContent: React.FC<Props> = ({ 
  setDbTagChange,
  dbTagChange,
}) => {
  const [inputTag, setInputTag] = useState('');
  const [dbTags, setDbTags] = useState([]);

  function setAddTagToDB(): void {
    if(inputTag === '') return;
    if(dbTags.find(({tag}) => tag === inputTag)) {
      alert('Tag already exists');
      return;
    }
    // if(questionTags.find((qt) => qt === inputTag)) {
    //   alert('Tag already exists in question');
    //   return;
    // }
    addTagToDB({tag: inputTag});    

    //Útil para atualizar a tag no painel do pai
    setDbTagChange(!dbTagChange);
    setInputTag('');
  }

  useEffect(() => {
    getTagsFromDB().then((tags) => {
      setDbTags(tags);
    });
  }, []); 

  return (
    <Container>
      <label 
        htmlFor="tag"
        style={{marginBottom: '0.5rem'}}
      >
        New Tag
      <GenericInput 
        onChange={(e) => setInputTag(e)}
        value={inputTag}
        name="tag"
      />
      </label>
      <GenericButton
        disabled={inputTag.length === 0} 
        onClick={() => setAddTagToDB()}
        text="Add"
        icon={GiCheckMark}
      />

    </Container>
  );
};

export default TagAddInputContent;