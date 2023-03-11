import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 100px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const Input = styled.input`
  margin: 4px;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const Button = styled.button`
  margin: 4px;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #92bfdb;
`;

export const Label = styled.label`
  margin: 4px;
  /* padding: 10px; */
  /* border: 1px solid #000; */
`;

export const Select = styled.select`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const BoxTags = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  
`;
export const BoxSetup = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  border-color: #2f00ff;
  border-style: solid;
  border-radius: 16px 0 0 16px;
  color: #2f00ff;
  display: flex;
  padding: 0px 12px;

`;

export const TagRight = styled.div`

  display: flex;
  /* background-color: red; */

  border-left: 0;
  /* border: 2px 2px 2px 0; */
  border-color: #2f00ff;
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
    background-color: #e6bfbf;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: #2f00ff;
    font-weight: bold;
  }


`;