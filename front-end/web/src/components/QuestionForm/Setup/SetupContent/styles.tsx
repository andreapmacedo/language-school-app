import styled from 'styled-components';


export const Container = styled.div`
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

export const CollapsedContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #b4efed;
  border-radius: 3px;
  align-self: center;
  width: 98%;
  margin: 10px;
`;

export const ControllerPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

export const Label = styled.label`
  margin: 8px 16px;
`;

export const Select = styled.select`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;