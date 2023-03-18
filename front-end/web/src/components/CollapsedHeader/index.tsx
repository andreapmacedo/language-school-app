import { Container } from './styles';
import { MdKeyboardArrowUp, MdKeyboardArrowLeft } from 'react-icons/md';
import AddButton from '../Bricks/Buttons/project/AddButton';

interface Props {
  isCollapsed: boolean;
  title: string;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const TagList: React.FC<Props> = ({
  isCollapsed,
  setIsCollapsed,
  title,
}) => {

  return (
    <Container>
        <AddButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          text={title}
          color='#eee'
        />
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed
            ? 
            <MdKeyboardArrowUp size={24} color='#eee' />
            :
            <MdKeyboardArrowLeft size={24} color='#eee' />
          }      
        </div>
    </Container>
  );
};

export default TagList;