import React from 'react';
import { Container } from './styles';
import { HiTrash } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';
import GenericLabel from '../../Bricks/GenericLabel';
import AddExplanation from '../AddExplanation';

interface Props {
  onClick: (index: number) => void;
  list: string[];
  onClickAdd: () => void;
  onChangeAdd: (e: string) => void;
  valueAdd: string;
}

const CardExplanation: React.FC<Props> = ({onClick, list, onClickAdd, onChangeAdd, valueAdd }) => {
  return (
    <Container >
      <GenericLabel text="Explicações" />
      {
        list.map((explanation, index) => (
          <div key={index}>
            <p>{explanation}</p>

            <div
              onClick={() => onClick(index)}
            >
            <CiEdit 
              // size={20}
              style={{
                color:  "#5ac9d1",
                // backgroundColor : '#000000',
                // padding:  '30px'
              }}
            
            />                    
            </div>


            <div
              onClick={() => onClick(index)}
            >
            <HiTrash 
              // size={20}
              style={{
                color:  "#d15a5a",
                // backgroundColor : '#000000',
                // padding:  '30px'
              }}
            
            />                    
            </div>
          </div>
        ))
      }

      <AddExplanation
        onChangeAdd={onChangeAdd} onClickAdd={onClickAdd} valueAdd={valueAdd}
      
      />
    </Container>
  );
};

export default CardExplanation;