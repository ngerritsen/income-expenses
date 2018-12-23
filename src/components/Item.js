import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/pro-solid-svg-icons';
import { faCheckCircle, faCircle } from '@fortawesome/pro-regular-svg-icons';

import { INCOME, EXPENSE, SALDO, DEFAULT_CATEGORY } from '../constants';
import { toCurrency } from '../helpers/formatting';
import { openEditModal, markItemAsPayed, unmarkItemAsPayed } from '../actions';

const Item = ({ amount, calculated, dirty, title, itemType, payed, handleEdit, handlePaymentMarker }) => (
  <ItemContainer>
    <ItemContent dirty={dirty} calculated={calculated}>
      {
          itemType === EXPENSE &&
          !calculated &&
        <ItemPayed onClick={handlePaymentMarker}>
          <FontAwesomeIcon icon={payed ? faCheckCircle : faCircle}/>
        </ItemPayed>
      }
      <ItemTitle onClick={handlePaymentMarker} itemType={itemType}>{title}</ItemTitle>
      <ItemAmount negative={amount < 0} itemType={itemType}>{toCurrency(amount)}</ItemAmount>
      {
        itemType !== SALDO &&
        !calculated &&
        <ItemEdit onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit}/>
        </ItemEdit>
      }
      {(itemType === SALDO  || calculated) && <ItemEdit/>}
    </ItemContent>
  </ItemContainer>
);

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  calculated: PropTypes.bool,
  category: PropTypes.string,
  id: PropTypes.string,
  dirty: PropTypes.bool,
  itemType: PropTypes.string,
  payed: PropTypes.bool,
  saldo: PropTypes.bool,
  title: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handlePaymentMarker: PropTypes.func.isRequired
};

const ItemContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const ItemContent = styled.div`
  opacity: ${props => props.dirty ? 0.5 : 1};
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  color: ${props => props.calculated ? props.theme.colors.grey : 'inherit'}
`;

const ItemTitle = styled.div`
  flex-grow: 1;
  font-weight: ${props => props.itemType === SALDO ? 'bold' : 'regular'};
  margin-right: ${props => props.theme.sizes.sm};
  cursor: pointer;
`;

const ItemAmount = styled.div`
  margin-right: ${props => props.theme.sizes.sm};
  font-weight: ${props => props.itemType === SALDO ? 'bold' : 'regular'};
  color: ${props => {
    switch (props.itemType) {
      case EXPENSE:
        return props.theme.colors.red;
      case INCOME:
        return props.theme.colors.green;
      case SALDO:
        return props.negative
          ? props.theme.colors.red
          : props.theme.colors.foreground;
    }
  }}
`;

const ItemPayed = styled.div`
  color: ${props => props.theme.colors.highlight};
  position: relative;
  top: 0.15rem;
  font-size: 0.9em;
  width: 2rem;
  cursor: pointer;
`;

const ItemEdit = styled.div`
  color: ${props => props.theme.colors.grey};
  position: relative;
  top: 0.15rem;
  width: 2.2rem;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.blue};
    cursor: pointer;
  }
`;

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  const { id, itemType, responsible, title, category, amount, payed } = ownProps;

  return {
    handleEdit() {
      dispatch(openEditModal(id, itemType, responsible));
      dispatch(initialize('item', {
        title,
        category: category || DEFAULT_CATEGORY,
        amount
      }));
    },
    handlePaymentMarker() {
      dispatch(payed ? unmarkItemAsPayed(id) : markItemAsPayed(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
