import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0px 100px; */
  /* background-color: #191919; */
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  width: 90%;
  background-color: #f5f5f5;
  gap: 10px;
`;

export const Input = styled.input`
  margin: 4px;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const Button = styled.button`
  margin: 4px;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #92bfdb;
`;

export const Label = styled.label`
  margin: 8px 16px;
`;

export const Select = styled.select`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const SetupContent = styled.div`
  /* margin: 10px; */
  padding: 10px;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #f5f5f5; */
  background-color: #2f2b3df5;
  color: #eee;
  border-radius: 3px;
`;

export const QuestionContent = styled.div`
  /* margin: 10px; */
  padding: 10px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  
  /* background-color: #f5f5f5; */
  background-color: #2f2b3df5;
  color: #eee;
  border-radius: 3px;
`;
