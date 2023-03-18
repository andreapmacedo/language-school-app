import { Container, TagLeft, TagRight } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
      <TagLeft
        onClick={() => add && add(tag)}
      >
        {tag}
      </TagLeft>
      { remove && 
        <TagRight>
          <AiOutlineCloseCircle
            size={20}
            color="#114677"
            onClick={() => remove(index, tag)} 
          />
        </TagRight>
      }
    </Container>
  );
};

export default Tag;