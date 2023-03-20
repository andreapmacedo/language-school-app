import React, {useState, useEffect} from 'react';
import CollapsedHeader from '../../../CollapsedHeader';
import Tag from '../Tag';
import { HiOutlineTrash } from 'react-icons/hi';

import { 
  Container,
  CollapsedContent,
  TagsContainer
} from './styles';

interface Props {
  dbTags: object[];
  setDbTagChange: (e: boolean) => void;
  // setDbTags: (e: object[]) => void;
  dbTagChange: boolean;
  remove: (index: number, tag: string) => void;
}

const TagManagement: React.FC<Props> = ({
  dbTags,
  setDbTagChange,
  // setDbTags,
  dbTagChange,
  remove,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <Container>
      <CollapsedHeader
        title='Tags Management'
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
                  icon={HiOutlineTrash}
                  remove={remove} 
                  // add={addTagToQuestion}
                />
              ))}
            </TagsContainer>
          </CollapsedContent>
        }

    </Container>
  );
};

export default TagManagement;
