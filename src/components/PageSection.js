import styled from 'styled-components';

const PageSection = styled.div`
  padding: ${props => props.theme.sizes.lg} 0;
  margin-top: ${props => props.theme.sizes.md};
  background-color: ${props => props.theme.colors.white};
`;

export default PageSection;
