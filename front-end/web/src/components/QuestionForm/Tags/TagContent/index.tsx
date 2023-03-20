import React, {useState, useEffect} from 'react';
import CollapsedHeader from '../../../CollapsedHeader';
import Tag from '../Tag';
import ModalContainer from '../ModalContainer';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';

import { 
  Container,
  CollapsedContent,
  TagsContainer
} from './styles';

interface Props {
  questionAdded: boolean;
  updateQuery: (query: any) => void;
  queryAdd: object;
}

const TagContent: React.FC<Props> = ({
  questionAdded,
  updateQuery,
  queryAdd,
}) => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [questionTags, setQuestionTags] = useState<string[]>([]);
  const [dbTags, setDbTags] = useState([]);
  const [dbTagChange, setDbTagChange] = useState(false);


useEffect(() => {
  getTagsFromDB().then((tags) => {
    setDbTags(tags);
  });
}, []); 

useEffect(() => {
  setQuestionTags([]);
}, [questionAdded]);

useEffect(() => {
  updateQuery({
    ...queryAdd,
    tags: questionTags.map((tag) => tag)
  });
}, [questionTags]);


// atualiza a lista de exibição de tags quando uma tag é adicionada ou removida do banco de dados
useEffect(() => {
  getTagsFromDB().then((tags) => {
    // Remover os tags que foram adicionados a questão
    const dbTags = tags.filter(({tag}) => !questionTags.includes(tag));
    setDbTags(dbTags);
  });
}, [dbTagChange]);

  function addTagToQuestion(tagToAdd: string): void {
    setQuestionTags([...questionTags, tagToAdd]);
    setDbTags(dbTags.filter(({tag}) => tag !== tagToAdd));
  }

  const removeQuestionTag = (index: number, tag: string) => {
    // console.log('removeQuestionTag', index, tag);
    // console.log('dbTags', dbTags);
    // alerta com confirmação
    // if (window.confirm('Are you sure you wish to delete this item?')) {
      const newTags = [...questionTags];
      newTags.splice(index, 1);
      setQuestionTags(newTags);
      setDbTags([...dbTags, {tag}]);
    // }
  }


  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    // setInputAnswer(''); 
  }

  // const addOnClickHandler = () => {
  //   addAnswer();
  //   setIsCollapsed(!isCollapsed);
  // }

  return (
    <Container>
      <CollapsedHeader
        title='Tags'
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
        {isCollapsed &&
          <CollapsedContent>
            <TagsContainer>
              {dbTags?.map(({tag}, index) => (
                
                <Tag
                  tag={tag}
                  key={index}
                  index={index}
                  // remove={removeQuestionTag} 
                  add={addTagToQuestion}
                />
              ))}
            </TagsContainer>
            <ModalContainer 
              setDbTagChange={setDbTagChange}
              dbTagChange={dbTagChange}
            />
          </CollapsedContent>
        }
      <TagsContainer>
        {questionTags?.map((tag, index) => (
          <Tag
            tag={tag}
            key={index}
            index={index}
            icon={AiOutlineCloseCircle}
            remove={removeQuestionTag} 
            // add={addTagToQuestion}
          />
        ))}
      </TagsContainer>      
    </Container>
  );
};

export default TagContent;
