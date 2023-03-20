import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Container = styled.div`
  display: grid;
  // primeira coluna: 250px
  // segunda coluna: auto
  // primeira linha: 70px
  // segunda linha: auto
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
  'AS MH'
  'AS CT';

  height: 100vh;
  min-width: 315px;

  @media(max-width: 600px){
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'MH'
    'CT';
  }
`;
