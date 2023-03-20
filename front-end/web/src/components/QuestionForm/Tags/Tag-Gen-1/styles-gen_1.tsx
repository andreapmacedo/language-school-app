import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* width: 100%; */
  border : 1px solid #114677;
  border-radius: 3px;
  /* background-color: #2f2b3df5; */
  margin: 8px;
  padding: 4px;

`;

export const TagLeft = styled.div`
  align-items: center;
  background-color: #fff;
  border-right: 0;
  border-color: #114677;
  border-style: solid;
  /* border-radius: 16px 0 0 16px; */
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
