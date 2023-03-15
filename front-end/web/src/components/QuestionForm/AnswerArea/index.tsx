import React, {useState} from 'react';
import { Container } from './styles';

import TrashButton from '../../Bricks/Buttons/TrashButton';
import EditButton from '../../Bricks/Buttons/EditButton';
import ConfirmButton from '../../Bricks/Buttons/ConfirmButton';
import CancelButton from '../../Bricks/Buttons/CancelButton';
import AddButton from '../../Bricks/Buttons/project/AddButton';
import GenericButton from '../../Bricks/Buttons/GenericButton';
import { GiCheckMark } from 'react-icons/gi';

interface Props {
  
  listAnswers: object[];
  inputAnswer: string;
  setInputAnswer: (e: string) => void;
  addAnswer: () => void;
  removeAnswer: (index: number) => void;
}

const AnswerArea: React.FC<Props> = ({
  listAnswers,
  inputAnswer,
  setInputAnswer,
  addAnswer,
  removeAnswer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const cancelOnClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setInputAnswer(''); 
  }

  const addOnClickHandler = () => {
    addAnswer();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Container>
      {!isCollapsed &&
        <AddButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          text='Add Answer'
          color='#eee'
        />
      }
        {/* {isCollapsed &&
          <CollapsedContent>
            <CollapsedTextarea
              setInputExplanation={setInputExplanation}     
              inputExplanation={inputExplanation}
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
        } */}
      {
        listAnswers?.map((answer, index) => (
          // <CardContent key={index} >
          <div key={index} >
            <p>{answer.answer}</p>
            {/* <div>
              <EditButton 
                onClick={() => removeAnswer(index)}
              />
              <TrashButton 
                onClick={() => removeAnswer(index)}
              />
            </div> */}
          </div>
        ))
      }
      {/* <>texto</> */}
    </Container>
  );
};

export default AnswerArea;