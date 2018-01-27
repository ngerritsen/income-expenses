import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.narrow ? '44rem' : '100rem'};
  padding: 0 ${props => props.theme.sizes.md};
`;

export default Container;
