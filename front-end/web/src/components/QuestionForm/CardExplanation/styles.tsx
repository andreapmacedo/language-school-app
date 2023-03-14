import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  background-color: #2f2b3df5;
  label {
    margin: 8px 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border: 1px solid #b4efed;
  border-radius: 3px;
  align-self: center;
  width: 96%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }
`;

export const CollapsedContent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 10px; */
  /* padding: 10px; */
  background-color: #fff;
  border: 1px solid #b4efed;
  border-radius: 3px;
  align-self: center;
  width: 98%;
  margin: 10px;

  /* button {
    
    border: none;
    background: none;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    width: 140px;
  } */
`;

export const ControllerPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;
