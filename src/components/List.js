import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SALDO, EXPENSE, INCOME, SHARED } from '../constants';
import { openAddModal } from '../actions';
import Item from './Item';
import CategoryHeading from './CategoryHeading';
import { getCategoryName } from '../helpers/category';
import { calculateSummary } from '../helpers/calculate';
import { getGroupedItems } from '../helpers/items';
import Button from './Button';
import Section from './Section';

const List = ({ groupedItems, itemType, summary, handleAdd, responsible }) => (
  <div>
    <Section size="sm">
      {groupedItems
        .reduce((items, category) => [
          ...items,
          <CategoryHeading key={category.id} title={getCategoryName(category.id)}/>,
          ...category.items
            .map(({ id, title, amount, responsible, category }) => (
              <Item
                key={id}
                {...{ id, title, amount, responsible, itemType, category }}
              />
            ))
        ], [])
      }
      {
        summary &&
        <React.Fragment>
          <CategoryHeading title="Samenvatting"/>
            <Item
              itemType={INCOME}
              amount={summary.totalIncome}
              title="Inkomen"
              calculated
            />
            {
                responsible === SHARED &&
                <Item
                  itemType={INCOME}
                  amount={summary.investmentMan}
                  title="Inleg Niels"
                  calculated
                />
            }
            {
                responsible === SHARED &&
                <Item
                  itemType={INCOME}
                  amount={summary.investmentWoman}
                  title="Inleg Peggy"
                  calculated
                />
            }
            <Item
              itemType={EXPENSE}
              amount={summary.totalExpense}
              title="Uitgaven"
              calculated
            />
            {
                responsible !== SHARED &&
                <Item
                  itemType={EXPENSE}
                  amount={summary.investment}
                  title="Inleg gezamelijk"
                  calculated
                />
            }
            <Item itemType={SALDO} title="Saldo" amount={summary.saldo}/>
        </React.Fragment>
      }
    </Section>
    <Section size="xs">
      <Button
        small
        onClick={handleAdd}
      >Toevoegen</Button>
    </Section>
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
  summary: PropTypes.shape({
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
    investmentMan: PropTypes.number.isRequired,
    investmentWoman: PropTypes.number.isRequired,
    saldo: PropTypes.number.isRequired,
    investment: PropTypes.number,
  }),
  itemType: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
  responsible: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const { items: { items } } = state;
  const { responsible, itemType } = ownProps;
  const summary = itemType === EXPENSE ? calculateSummary(items, responsible) : null;

  return {
    itemType,
    groupedItems: getGroupedItems(items, itemType, responsible),
    responsible,
    summary
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { responsible, itemType } = ownProps;

  return {
    handleAdd() {
      dispatch(openAddModal(itemType, responsible));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
