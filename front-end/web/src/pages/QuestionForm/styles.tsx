import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0px 100px; */
  /* background-color: #191919; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  align-items: center;
  
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  width: 90%;
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
  margin: 8px 16px;
  /* padding: 10px; */
  /* border: 1px solid #000; */
`;

export const Select = styled.select`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const BoxTags = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  width: 95%;
`;

export const BoxSetup = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
`;

export const BoxAdd = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  width: 90%;
  background-color: #fff;
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

export const BoxCards = styled.div`

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  /* width: 90%; */
`;

export const ListCard = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  width: 90%;

  /* div:first-child {
    background-color: red;
  } */

  p {

    width: 90%;
  }

  div {
    padding-left: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }


  div:nth-child(1) {
    /* background-color: red; */
    font-size: 16px;
    /* margin-left: 8px; */
    padding-left: 16px;
    cursor: pointer;
    /* font-weight: bold; */
  }

  div:nth-child(2) {
    /* background-color: blue; */
    /* width: 10%; */
    /* margin-left: 8px; */
    padding-left: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

`;