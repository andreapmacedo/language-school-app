import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #2f2b3df5;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

`;
