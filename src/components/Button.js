import styled from 'styled-components';
import { darken, desaturate } from 'polished';

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  padding: ${(props) => (props.small ? props.theme.sizes.xs : '1.4rem')};
  text-align: center;
  background-color: ${(props) =>
    props.disabled
      ? desaturate(0.5, getButtonColor(props))
      : getButtonColor(props)};
  color: ${(props) => props.theme.colors.white};

  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) =>
      props.disabled ? '' : darken(0.05, getButtonColor(props))};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }
`;

function getButtonColor(props) {
  if (props.danger) {
    return props.theme.colors.red;
  }

  if (props.warning) {
    return props.theme.colors.orange;
  }

  return props.theme.colors.blue;
}

export default Button;
