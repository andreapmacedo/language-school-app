import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  background-color: #cff5fb;
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
  margin: 10px;
  padding: 10px;
  /* border: 1px solid #000; */
  border-radius: 5px;
  align-self: center;
  width: 96%;

  button {
    /* margin: 8px 0; */
    border: none;
    background: none;
    color: #000;
    font-size: 16px;
    /* font-weight: bold; */
    cursor: pointer;
    width: 140px;
  }


`;

