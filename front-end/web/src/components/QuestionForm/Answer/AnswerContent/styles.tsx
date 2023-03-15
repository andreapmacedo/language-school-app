import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  background-color: #2f2b3df5;
  /* background-color: #f5f5f5; */
  label {
    margin: 8px 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: #fff;
  margin-bottom: 10px;
  padding: 2px 8px;
  border: 2px solid #3a93e6;
  border-radius: 3px;
  align-self: center;
  width: 96%;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #114677;
  
  p {
    margin: 8px 0;
    /* font-size: 16px; */
    font-weight: 500;
    /* background-color: #f5f5f5; */
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
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
