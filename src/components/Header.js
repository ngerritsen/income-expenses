import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import { connect } from 'react-redux';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faUsdCircle } from '@fortawesome/fontawesome-pro-solid';
import { faSync } from '@fortawesome/fontawesome-pro-solid';
import { faCheck } from '@fortawesome/fontawesome-pro-solid';

import Container from './Container';

const Header = ({ dirty, showStatus }) => (
  <div>
    <HeaderBar placeholder/>
    <HeaderBar>
      <Container>
        <HeaderContent>
          <LogoContainer>
            <FontAwesome icon={faUsdCircle}/>
          </LogoContainer>
          <HeaderTitle>In & uit</HeaderTitle>
          {
            showStatus &&
            <Status dirty={dirty}>
              {dirty && <FontAwesome icon={faSync} spin/>}
              {!dirty && <FontAwesome icon={faCheck}/>}
            </Status>
          }
        </HeaderContent>
      </Container>
    </HeaderBar>
  </div>
);

Header.propTypes = {
  dirty: PropTypes.bool.isRequired,
  showStatus: PropTypes.bool.isRequired
};

const LogoContainer = styled.span`
  font-size: 2.8rem;
  margin-right: 1.2rem;
  float: left;
  color: ${props => props.theme.colors.coin};
`;

const HeaderBar = styled.header`
  position: ${props => props.placeholder ? 'static' : 'fixed'};
  top: 0;
  width: 100%;
  z-index: ${props => props.placeholder ? 'inherit' : 2};
  background-color: ${props => props.theme.colors.white};
  height: 6rem;
  border-bottom: 1px solid ${props => darken(0.05, props.theme.colors.white)};

  @media screen and (min-width: ${props => props.theme.mobile}) {
    height: 8rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;

  @media screen and (min-width: ${props => props.theme.mobile}) {
    height: 8rem;
  }
`;

const Status = styled.div`
  margin: 0.6rem ${props => props.theme.sizes.xxs} 0 0;
  font-size: 1.6rem;
  color: ${props => props.dirty ? props.theme.colors.grey : props.theme.colors.green};
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  flex-grow: 1;
`;

function mapStateToProps(state) {
  return {
    dirty: Boolean(state.items.items.find(item => item.dirty)),
    showStatus: state.items.initialized && state.authentication.loggedIn
  };
}

export default connect(mapStateToProps)(Header);
