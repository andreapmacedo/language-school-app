import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #191919;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-right: 200px;
  top: 0;
  align-items: center; 

  div {
    background-color: #191919;
    display: flex;
    cursor: pointer;  
  }

  img {
    margin-left: 8px;
  }
    
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    
    h3 {
      align-self: flex-end;
    }
    
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;  
    }

    p {
      color: #999;
      font-style: bolder;
      padding-right: 4px;
    }
  }
  
`;