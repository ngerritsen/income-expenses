import React, { PropTypes } from 'react'

import '../styles/item.scss'

const Item = ({ amount, title }) => (
  <div className="item">
    {title}
    <span className="item--amount">
      {toCurrency(amount)}
    </span>
  </div>
)

function toCurrency (num) {
  const isWholeNum = num % 1 === 0

  if (isWholeNum) {
    return num.toFixed(0) + ',-'
  }

  return num
    .toFixed(2)
    .replace('.', ',')
}

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Item
