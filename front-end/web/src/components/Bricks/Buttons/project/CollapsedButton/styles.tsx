import styled from 'styled-components';

export const Container = styled.div`
  color: #114677;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  width: 150px;
  border-radius: 4px;
  font-style: italic;
  &:hover {
    cursor: pointer;
    /* background-color: #0069d9; */
    text-decoration: underline;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }


  /* .icon{
    width: 16px;
    height: 16px;
    fill: #3a77ff;
    margin-right: 8px;
  } */

`;