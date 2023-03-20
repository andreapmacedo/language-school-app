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
  color: ${props => props.theme.colors.white};
`;