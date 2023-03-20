import React from 'react';

import { Container } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import MainContent from '../MainContent';

const Layout: React.FC = ({ children }) => (
  <Container>
    <MainHeader />
    <Aside />
    <MainContent>
        { children }
    </MainContent>
  </Container>
);

export default Layout;