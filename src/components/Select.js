import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import Label from './Label';

const Select = ({ input, label, meta, children }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <SelectField name={name} {...input} error={meta.touched && meta.error}>
      {children}
    </SelectField>
    {meta.touched && meta.error && <SelectError>{meta.error}</SelectError>}
  </div>
);

Select.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const SelectField = styled.select`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.colors.red
        : darken(0.15, props.theme.colors.border)};
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.foreground};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.error
          ? darken(0.1, props.theme.colors.red)
          : props.theme.colors.blue};
  }
`;

const SelectError = styled.span`
  display: block;
  padding-top: ${(props) => props.theme.sizes.xxs};
  color: ${(props) => props.theme.colors.red};
`;

export default Select;
