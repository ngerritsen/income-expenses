import React, { PropTypes } from 'react'

import { toCurrency } from '../helpers/formatting'

import '../styles/item.scss'

const Item = ({ amount, calculated, title, id, itemType, remove, saldo }) => (
  <div className={
    'item' +
    (itemType ? ` alt-${itemType}` : '') +
    (calculated ? ' alt-calculated' : '') +
    (saldo ? ' alt-saldo' : '')
  }>
    <span className="item--title">
      {title}
    </span>
    <span className="item--amount">
      {toCurrency(amount)}
    </span>
    <span className="item--tools">
      <i
        className="fa fa-times"
        onClick={calculated ? null : e => remove(id)}
      ></i>
    </span>
  </div>
)

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  calculated: PropTypes.bool,
  id: PropTypes.string,
  itemType: PropTypes.string,
  remove: PropTypes.func,
  saldo: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default Item
