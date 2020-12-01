import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import Container from './Container';
import PageSection from './PageSection';
import Title from './Title';

import { INCOME, EXPENSE } from '../constants';

const Sheet = ({ responsible, title }) => {
  return (
    <PageSection>
      <Container>
        <Title>{title}</Title>
        <Lists>
          <ListContainer>
            <List responsible={responsible} itemType={INCOME} />
          </ListContainer>
          <ListContainer>
            <List responsible={responsible} itemType={EXPENSE} />
          </ListContainer>
        </Lists>
      </Container>
    </PageSection>
  );
};

Sheet.propTypes = {
  responsible: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Lists = styled.div`
  @media screen and (min-width: ${(props) => props.theme.mobile}) {
    display: flex;
  }
`;

const ListContainer = styled.div`
  margin-bottom: ${(props) => props.theme.sizes.md};

  @media screen and (min-width: ${(props) => props.theme.mobile}) {
    margin-right: ${(props) => props.theme.sizes.md};
    width: 50%;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Sheet;
