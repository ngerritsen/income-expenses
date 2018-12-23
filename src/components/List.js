import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SALDO, EXPENSE } from '../constants';
import { openAddModal, resetPayments } from '../actions';
import Item from './Item';
import CategoryHeading from './CategoryHeading';
import { getCategoryName } from '../helpers/category';
import { getCalculatedValues } from '../helpers/calculate';
import { getGroupedItems } from '../helpers/items';
import Button from './Button';
import Section from './Section';

const List = ({ groupedItems, saldo, itemType, investment, handleAdd, handleResetPayments }) => (
  <div>
    <Section size="sm">
      {groupedItems
        .reduce((items, category) => [
          ...items,
          <CategoryHeading key={category.id} title={getCategoryName(category.id)}/>,
          ...category.items
            .map(({ id, title, amount, responsible, payed }) => (
              <Item
                key={id}
                {...{ id, title, amount, responsible, itemType, payed }}
              />
            ))
        ], [])
      }
      {
        investment
         ? <Item
            itemType={itemType}
            amount={investment}
            title="Inleg gezamelijk"
            calculated
          />
        : null
      }

      {
        saldo
          ? <Item itemType={SALDO} title="Saldo" amount={saldo}/>
          : null
      }
    </Section>
    <Section size="xs">
      <Button
        small
        onClick={handleAdd}
      >Toevoegen</Button>
    </Section>
    {
      itemType === EXPENSE &&
      <Button
        small
        warning
        onClick={handleResetPayments}
      >Reset betalingen</Button>
    }
  </div>
);

List.propTypes = {
  groupedItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      dirty: PropTypes.bool,
      category: PropTypes.string,
      responsible: PropTypes.string.isRequired,
      itemType: PropTypes.string.isRequired
    })).isRequired
  })).isRequired,
  saldo: PropTypes.number,
  investment: PropTypes.number,
  itemType: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleResetPayments: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  const { items: { items } } = state;
  const { responsible, itemType } = ownProps;
  const { saldo, investment } = itemType === EXPENSE
    ? getCalculatedValues(items, responsible) :
    {};

  return {
    itemType,
    groupedItems: getGroupedItems(items, itemType, responsible),
    saldo,
    investment,
    responsible
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { responsible, itemType } = ownProps;

  return {
    handleAdd() {
      dispatch(openAddModal(itemType, responsible));
    },
    handleResetPayments() {
      dispatch(resetPayments(responsible));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
