import React from 'react'
import PropTypes from 'prop-types'

import List from './list'
import Saldo from './saldo'

import '../styles/sheet.scss'

import { INCOME, EXPENSE } from '../constants'

const Sheet = ({ add, edit, items, remove, responsible, title, toggleEditMode }) => {
  const scopedItems = items.filter(item => item.responsible === responsible)
  const listProps = { add, edit, items: scopedItems, remove, responsible, toggleEditMode }

  return (
    <div className="sheet">
      <h2>{title}</h2>
      <div className="clearfix">
        <List {...listProps} itemType={INCOME}/>
        <List {...listProps} itemType={EXPENSE}/>
      </div>
      <Saldo items={items} responsible={responsible}/>
    </div>
  )
}

Sheet.propTypes = {
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  responsible: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired
}

export default Sheet
