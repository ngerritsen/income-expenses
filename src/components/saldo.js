import React from 'react'
import PropTypes from 'prop-types'

import Item from './item'
import { SALDO } from '../constants'

const Saldo = ({ items, responsible }) => {
  const { amount, title } = items
    .find(item => item.itemType === SALDO && item.responsible === responsible)

  return <Item amount={amount} title={title} saldo calculated/>
}

Saldo.propTypes = {
  items: PropTypes.array.isRequired,
  responsible: PropTypes.string.isRequired
}

export default Saldo
