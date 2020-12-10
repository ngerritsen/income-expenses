import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';

const CategoryHeading = ({ title }) => (
  <CategoryHeadingContainer>{title}</CategoryHeadingContainer>
);

CategoryHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

const CategoryHeadingContainer = styled.div`
  border-bottom: 1px solid ${(props) => transparentize(0.5, props.theme.colors.highlight)};
  color: ${(props) => props.theme.colors.highlight};
  padding: ${(props) => props.theme.sizes.sm} 0
    ${(props) => props.theme.sizes.xs};
  font-size: 1.4rem;
  font-weight: bold;

  &:first-child {
    padding-top: ${(props) => props.theme.sizes.xxs};
  }
`;

export default CategoryHeading;
