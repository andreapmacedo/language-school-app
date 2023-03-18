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

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
  /* border-radius: 3px; */
  /* background-color: #2f2b3df5; */
  /* background-color: #2fd; */
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
  /* flex-wrap: wrap; */
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
  /* align-items: center; */
`;

export const TagLeft = styled.div`
  align-items: center;
  background-color: #fff;
  border-right: 0;
  border-color: #114677;
  border-style: solid;
  border-radius: 16px 0 0 16px;
  color: #2f00ff;
  /* background-color: #ccf7f2; */
  color: #114677;
  display: flex;
  padding: 0px 12px;
  cursor: pointer;
`;

export const TagRight = styled.div`

  display: flex;
  /* background-color: red; */
  padding-left: 8px;
  border-left: 0;
  /* border: 2px 2px 2px 0; */
  border-color: #2f00ff;
  border-color: #114677;
  border-style: solid;
  border-radius: 0 16px 16px 0;
  /* width: 10%; */
  width: 32px;
  height: 32px;
  
  /* height: 100%; */
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
    /* color: #2f00ff; */
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }
`;