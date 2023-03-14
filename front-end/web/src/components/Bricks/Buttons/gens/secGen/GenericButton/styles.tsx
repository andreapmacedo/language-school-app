import styled, { ThemedStyledProps } from 'styled-components';

interface Props {
  textColor: string;
}

export const Container = styled.div`
`;

const ButtonProp = styled.button<Props>`
  color: ${(props: ThemedStyledProps<Props, any>) => props.textColor};
  /* ...resto do estilo */
`;

export const Button = styled.button`
  gap: 8px;
  display: flex;  
  border: none;
  padding: 0px 16px;
  /* color: #3a77ff; */
  color: ${(props: ThemedStyledProps<Props, any>) => props.textColor};
  /* color: ${props => props.textColor}; utiliza a nova propriedade */
  font-size: 16px;
  
  /* font-weight: 500; */
  font-style: italic;
  cursor: pointer;
  margin: 8px 0px;

  &:hover {
    text-decoration: underline;
  }




  &[disabled] {
    color: #999;
    cursor: not-allowed;
    text-decoration: none;
  }

`;




  /* .icon{
    width: 16px;
    height: 16px;
    fill: #3a77ff;
    margin-right: 8px;
    
  } */