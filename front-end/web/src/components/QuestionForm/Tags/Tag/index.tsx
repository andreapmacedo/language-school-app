import { Container, TagLeft, TagRight } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IconType } from 'react-icons';

interface Props {
  tag: string;
  index: number;
  add?: (tag: string) => void;
  remove?: (index: number, tag: string) => void;
  icon?: IconType;
}

const Tag: React.FC<Props> = ({
  tag,
  index,
  add,
  remove,
  icon: Icon,
}) => {

  return (
    <Container>      
      <TagLeft
        onClick={() => add && add(tag)}
      >
        {tag}
      </TagLeft>
      { remove && 
        <TagRight
        onClick={() => remove(index, tag)}
        >
          {Icon && <Icon className='icon'/>}
        </TagRight>
      }
    </Container>
  );
};

export default Tag;