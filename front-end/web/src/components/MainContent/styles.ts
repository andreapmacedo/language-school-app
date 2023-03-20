import styled, { css } from 'styled-components';


// interface IContainerProps {
//   menuIsOpen: boolean;
// }


// interface IThemeToggleFooterProps {
//   menuIsOpen: boolean;
// }


/* export const Container = styled.div<IContainerProps>` */
export const Container = styled.div`
  grid-area: CT;
  /* background-color: #1B1F38; */
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;