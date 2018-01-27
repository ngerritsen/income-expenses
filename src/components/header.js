import styled from 'styled-components';
import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faUsdCircle } from '@fortawesome/fontawesome-pro-solid';

import Container from './Container';

const Header = () => (
  <HeaderBar>
    <Container>
      <LogoContainer>
        <FontAwesome icon={faUsdCircle}/>
      </LogoContainer>
      <HeaderTitle>In & uit</HeaderTitle>
    </Container>
  </HeaderBar>
);

const LogoContainer = styled.span`
  font-size: 2.8rem;
  margin-right: 1.2rem;
  float: left;
  color: ${props => props.theme.colors.coin};
`;

const HeaderBar = styled.header`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.sizes.sm} 0;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
`;

export default Header;
