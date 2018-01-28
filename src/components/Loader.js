import React from 'react';
import styled from 'styled-components';

import FontAwesome from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-pro-solid';

const Loader = () => (
  <LoaderContainer>
    <FontAwesome icon={faCircleNotch} spin/>
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  margin: 16rem auto 0;
  font-size: 4rem;
  color: ${props => props.theme.colors.grey};
  text-align: center;
`;

export default Loader;
