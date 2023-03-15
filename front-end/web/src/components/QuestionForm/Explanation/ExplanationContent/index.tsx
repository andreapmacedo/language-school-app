import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent, ControllerPanel } from './styles';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import AddButton from '../../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import GenericAddInputArea from '../../GenericAddInputArea';


interface Props {
  onClick: (index: number) => void;
  list: string[];
  addExplanation: () => void;
  setInputExplanation: (e: string) => void;
  inputExplanation: string;
}

const ExplanationContent: React.FC<Props> = ({onClick, list, addExplanation, setInputExplanation, inputExplanation }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setInputExplanation(''); 
  }

  const addOnClickHandler = () => {
    addExplanation();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Container>
      {!isCollapsed &&
        <AddButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          text='Add Explanation'
          color='#eee'
        />
      }
        {isCollapsed &&
          <CollapsedContent>
            <GenericAddInputArea
              setInput={setInputExplanation}     
              input={inputExplanation}
              name='explanation'
              text='explanation:'
            />

            <ControllerPanel>
              <GenericButton
                disabled={inputExplanation.length === 0} 
                onClick={addOnClickHandler}
                text='add'
                icon={GiCheckMark}
              />
              <CancelButton
                onClick={cancelOnClickHandler}
                text='cancel'
              />
            </ControllerPanel>
          
          </CollapsedContent>
        }
      {
        list.map((explanation, index) => (
          <CardContent key={index} >
            <p>{explanation}</p>
            <div>
              <EditButton 
                onClick={() => onClick(index)}
              />
              <TrashButton 
                onClick={() => onClick(index)}
              />
            </div>
          </CardContent>
        ))
      }
    </Container>
  );
};

export default ExplanationContent;