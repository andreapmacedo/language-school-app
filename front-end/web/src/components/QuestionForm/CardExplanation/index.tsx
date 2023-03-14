import React, {useState} from 'react';
import { Container, CardContent, CollapsedContent } from './styles';
import GenericLabel from '../../Bricks/GenericLabel';
import AddExplanation from '../AddExplanation';
import TrashButton from '../../Bricks/Buttons/TrashButton';
import EditButton from '../../Bricks/Buttons/EditButton';
import CollapsedButton from '../../Bricks/Buttons/ProjectButtonCollapsed';
import ConfirmButton from '../../Bricks/Buttons/ConfirmButton';
import GenericButton from '../../Bricks/Buttons/GenericButton';

interface Props {
  onClick: (index: number) => void;
  list: string[];
  addQuestionExplanation: () => void;
  setQuestionExplanation: (e: string) => void;
  questionExplanation: string;
}

const CardExplanation: React.FC<Props> = ({onClick, list, addQuestionExplanation, setQuestionExplanation, questionExplanation }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const cancelClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setQuestionExplanation(''); 
  }

  const addClickHandler = () => {
    addQuestionExplanation();
    setIsCollapsed(!isCollapsed);
  }


  return (
    <Container>
      {isCollapsed &&
        <GenericButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          text='Add Explanation'
        />
      }
      <CollapsedContent>
        {!isCollapsed &&
          <div>
            <AddExplanation
              setQuestionExplanation={setQuestionExplanation}     
              questionExplanation={questionExplanation}
            />
            <div>
              <GenericButton 
                onClick={cancelClickHandler}
                text='Cancel'
              />
              <GenericButton 
                onClick={addClickHandler}
                text='Add'
              />
            </div>
          </div>
        }
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