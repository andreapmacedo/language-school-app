import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border : 1px solid #114677;
  border-radius: 16px;
  margin: 8px;
  padding: 6px;
  background-color: #fff;
  cursor: pointer;
`;

export const TagLeft = styled.div`
  align-items: center;
  background-color: #fff;
  border-right: 0;
  color: #2f00ff;
  color: #114677;
  display: flex;
  padding: 0px 12px;
`;

export const TagRight = styled.div`
  display: flex;
  background-color: #fff;
  border-left: 0;
  border-color: #114677;
  border-radius: 16px;  
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  p {
    background-color: #eee;
    border-radius: 50%;
    width: 18px;
    height: 18px;
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
