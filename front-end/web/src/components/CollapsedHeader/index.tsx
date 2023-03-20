import { Container } from './styles';
import { MdKeyboardArrowUp, MdKeyboardArrowLeft } from 'react-icons/md';
import AddButton from '../Bricks/Buttons/project/AddButton';
import MinusButton from '../Bricks/Buttons/MinusButton';
import GenericButton from '../Bricks/Buttons/project/GenericButton';
import { MdAddCircleOutline } from 'react-icons/md';
import { AiOutlineMinusCircle } from 'react-icons/ai';


interface Props {
  isCollapsed: boolean;
  title: string;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const CollapsedHeader: React.FC<Props> = ({
  isCollapsed,
  setIsCollapsed,
  title,
}) => {

  return (
    <Container>

          {/* {isCollapsed
            ? 
            <AddButton 
              onClick={() => setIsCollapsed(!isCollapsed)}
              text={title}
              color='#eee'
            />
            :
            <MinusButton 
              onClick={() => setIsCollapsed(!isCollapsed)}
              text={title}
              color='#eee'
            />            
          }    */}
          {isCollapsed
            ? 
            <GenericButton 
              onClick={() => setIsCollapsed(!isCollapsed)}
              text={title}
              textColor='#eee'
              icon={AiOutlineMinusCircle}
              />
            :
            <GenericButton 
              onClick={() => setIsCollapsed(!isCollapsed)}
              text={title}
              textColor='#eee'
              icon={MdAddCircleOutline}
            />            
          }   


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

export default CollapsedHeader;