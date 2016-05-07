import React, { PropTypes } from 'react'

import List from './list'
import Item from './item'
import Saldo from './saldo'

import '../styles/sheet.scss'

import { SHARED, INCOME, EXPENSE } from '../constants'

const Sheet = ({ add, items, remove, responsible, title }) => {
  const scopedItems = items.filter(item => item.responsible === responsible)

  return (
    <div className="sheet">
      <h2>{title}</h2>
      <div className="clearfix">
        <List add={add} items={scopedItems} itemType={INCOME} responsible={responsible} remove={remove}/>
        <List add={add} items={scopedItems} itemType={EXPENSE} responsible={responsible} remove={remove}/>
      </div>
      <Saldo items={items} responsible={responsible}/>
    </div>
  )
}

Sheet.propTypes = {
  add: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  responsible: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Sheet
