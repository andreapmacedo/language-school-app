import React, {useState, useEffect} from 'react';
import { Container, CardContent, CollapsedContent, ControllerPanel } from './styles';
import TrashButton from '../../../Bricks/Buttons/TrashButton';
import EditButton from '../../../Bricks/Buttons/EditButton';
import CancelButton from '../../../Bricks/Buttons/CancelButton';
import GenericButton from '../../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';
import GenericAddInputArea from '../../../Bricks/project/GenericAddInputArea';
import CollapsedHeader from '../../../CollapsedHeader';


interface Props {
  questionAdded: boolean;
  updateQuery: (query: any) => void;
  queryAdd: object;
}

const ExplanationContent: React.FC<Props> = ({
  questionAdded,
  updateQuery,
  queryAdd,  
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [explanation, setExplanation] = useState<string>('');
  const [explanations, setExplanations] = useState<string[]>([]);

  useEffect(() => {
    setExplanations([]);
  }, [questionAdded]);

  useEffect(() => {
    updateQuery({...queryAdd, explanations});
  }, [explanations]);
  

  const addExplanation = () => {
    setExplanations([...explanations, explanation]);
    setExplanation('');
  }

  const removeExplanation = (index: number) => {
    const newExplanations = [...explanations];
    newExplanations.splice(index, 1);
    setExplanations(newExplanations);
  }

  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setExplanation(''); 
  }

  const addOnClickHandler = () => {
    addExplanation();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Container>
      <CollapsedHeader
        title='Explanations'
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
        {isCollapsed &&
          <CollapsedContent>
            <GenericAddInputArea
              setInput={setExplanation}     
              input={explanation}
              name='explanation'
              text='explanation:'
            />

            <ControllerPanel>
              <GenericButton
                disabled={explanation.length === 0} 
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
        explanations.map((explanation, index) => (
          <CardContent key={index} >
            <p>{explanation}</p>
            <div>
              <EditButton 
                onClick={() => removeExplanation(index)}
              />
              <TrashButton 
                onClick={() => removeExplanation(index)}
              />
            </div>
          </CardContent>
        ))
      }
    </Container>
  );
};

export default ExplanationContent;