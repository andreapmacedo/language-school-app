import React from 'react';
import { Container } from './styles';
// import { IoCloseCircle } from 'react-icons/io5';

interface Props {
  onClickAdd: () => void;
  onChangeAdd: (e: string) => void;
  text?: string;
  valueAdd: string;
}

const AddExplanation: React.FC<Props> = ({ onChangeAdd, onClickAdd, valueAdd  }) => {
  return (
    <Container>
        <label htmlFor='explanations'>
          Explanation:
        <input
          type="text"
          name="explanation"
          value={valueAdd}
          // onChange={(e) => setQuestionExplanation(e.target.value)}
          onChange={(e) => onChangeAdd(e.target.value)}
          />
        </label>
        <button
            type="button"
            // onClick={() => addQuestionExplanation()}
            onClick={() => onClickAdd()}
          >
            Adicionar Explicação
        </button>         
    </Container>
  );
};

export default AddExplanation;