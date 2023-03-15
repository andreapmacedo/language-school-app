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
  // onClick: (index: number) => void;
  // list: string[];
  // addQuestionExplanation: () => void;
  // setQuestionExplanation: (e: string) => void;
  // questionExplanation: string;
}

const AnswerArea: React.FC<Props> = ({}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const cancelOnClickHandler = () => {
    // setIsCollapsed(!isCollapsed)
    // setQuestionExplanation(''); 
  }

  const addOnClickHandler = () => {
    // addQuestionExplanation();
    // setIsCollapsed(!isCollapsed);
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
              setQuestionExplanation={setQuestionExplanation}     
              questionExplanation={questionExplanation}
            />
            <ControllerPanel>
              <GenericButton
                disabled={questionExplanation.length === 0} 
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
        // list.map((explanation, index) => (
        //   <CardContent key={index} >
        //     <p>{explanation}</p>
        //     <div>
        //       <EditButton 
        //         onClick={() => onClick(index)}
        //       />
        //       <TrashButton 
        //         onClick={() => onClick(index)}
        //       />
        //     </div>
        //   </CardContent>
        // ))
      }
    </Container>
  );
};

export default AnswerArea;