import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

const CategoryHeading = ({ title }) => (
  <CategoryHeadingContainer>
    {title}
  </CategoryHeadingContainer>
);

CategoryHeading.propTypes = {
  title: PropTypes.string.isRequired
};

const CategoryHeadingContainer = styled.div`
  border-bottom: 1px solid ${props => lighten(0.3, props.theme.colors.highlight)};
  color: ${props => props.theme.colors.highlight};
  padding: 1.6rem 0 0.8rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export default CategoryHeading;
