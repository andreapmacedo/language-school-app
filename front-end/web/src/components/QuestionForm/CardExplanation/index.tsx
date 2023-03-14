import React, {useState} from 'react';
import { Container, CardContent } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import AddExplanation from '../AddExplanation';
import TrashButton from '../../Bricks/Buttons/TrashButton';
import EditButton from '../../Bricks/Buttons/EditButton';
import GenericCard from '../../Bricks/Cards/GenericCard';

interface Props {
  onClick: (index: number) => void;
  onClickAdd: () => void;
  onChangeAdd: (e: string) => void;
  list: string[];
  valueAdd: string;
}

const CardExplanation: React.FC<Props> = ({onClick, list, onClickAdd, onChangeAdd, valueAdd }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  return (
    <Container>
      <GenericLabel text="Explicações" />
      <div>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Cancel' : 'Add Explanation'}
        </button>
        <div>
          {isCollapsed &&
            <AddExplanation
              onChangeAdd={onChangeAdd} onClickAdd={onClickAdd} valueAdd={valueAdd}
              isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}
            />
          }
        </div>
      </div>
      {
        list.map((explanation, index) => (
          <CardContent key={index} >
            <p>{explanation}</p>
            <div>
              <TrashButton 
                onClick={() => onClick(index)}
              />
              <EditButton 
                onClick={() => onClick(index)}
              />
            </div>
          </CardContent>
        ))
      }
    </Container>
  );
};

export default CardExplanation;