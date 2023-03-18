import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 3px;
  background-color: #2f2b3df5;
  label {
    margin: 8px 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
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
    font-weight: 500;
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

export const TagWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

export const TagLeft = styled.div`
  align-items: center;
  background-color: #fff;
  border-right: 0;
  border-color: #114677;
  border-style: solid;
  border-radius: 16px 0 0 16px;
  color: #2f00ff;
  
  color: #114677;
  display: flex;
  padding: 0px 12px;
  cursor: pointer;
`;

export const TagRight = styled.div`

  display: flex;
  background-color: #fff;
  padding-left: 8px;
  border-left: 0;
  
  border-color: #2f00ff;
  border-color: #114677;
  border-style: solid;
  border-radius: 0 16px 16px 0;
  
  width: 32px;
  height: 32px;
  
  
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    background-color: #eee;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }
`;
