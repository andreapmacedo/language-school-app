import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import AddExplanation from '../AddExplanation';
import TrashButton from '../../Bricks/Buttons/TrashButton';
import EditButton from '../../Bricks/Buttons/EditButton';

interface Props {
  onClick: (index: number) => void;
  list: string[];
  addQuestionExplanation: () => void;
  setQuestionExplanation: (e: string) => void;
  questionExplanation: string;
}

const CardExplanation: React.FC<Props> = ({onClick, list, addQuestionExplanation, setQuestionExplanation, questionExplanation }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const cancelClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setQuestionExplanation(''); 
  }

  
  return (
    <Container>
      <GenericLabel text="Explicações" />
      <CollapsedContent>
        <button onClick={cancelClickHandler}>
          {isCollapsed ? 'Cancel' : 'Add Explanation'}
        </button>
        <div>
          {isCollapsed &&
            <AddExplanation
              setQuestionExplanation={setQuestionExplanation}
              addQuestionExplanation={addQuestionExplanation}
              questionExplanation={questionExplanation}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          }
        </div>
      </CollapsedContent>
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

export default CardExplanation;