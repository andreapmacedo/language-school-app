import styled, { css } from 'styled-components';


// interface IContainerProps {
//   menuIsOpen: boolean;
// }


// interface IThemeToggleFooterProps {
//   menuIsOpen: boolean;
// }


/* export const Container = styled.div<IContainerProps>` */
export const Container = styled.div`
  grid-area: MH;
  
  /* background-color: #252a48; */
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;


export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3`
  color: ${props => props.theme.colors.white};
`;

export const UserName = styled.span`
  color: ${props => props.theme.colors.info};
`;