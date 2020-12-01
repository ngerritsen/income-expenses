import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import Label from './Label';

const Input = ({ input, label, meta, type, step }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <InputField
      type={type || 'text'}
      step={step}
      name={name}
      {...input}
      error={meta.touched && meta.error}
    />
    {meta.touched && meta.error && <InputError>{meta.error}</InputError>}
  </div>
);

Input.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  step: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
};

const InputField = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.colors.red
        : darken(0.15, props.theme.colors.border)};
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.error
          ? darken(0.1, props.theme.colors.red)
          : props.theme.colors.blue};
  }
`;

const InputError = styled.span`
  display: block;
  padding-top: ${(props) => props.theme.sizes.xxs};
  color: ${(props) => props.theme.colors.red};
`;

export default Input;
