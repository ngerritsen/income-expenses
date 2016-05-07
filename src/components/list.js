import React, { PropTypes } from 'react'

import Item from './item'
import AddItem from './add-item'

import { EXPENSE, INCOME, SHARED, MAN, WOMAN } from '../constants'

import '../styles/list.scss'

const List = ({ add, items, itemType, responsible, remove }) => (
  <div className="list">
    {items
      .filter(item => itemType === item.itemType && responsible === item.responsible)
      .filter(({ amount }) => amount > 0)
      .map(({ amount, id, itemType: type, responsible: res, title, calculated }, index) =>
        <Item
          key={id || index}
          amount={amount}
          title={title}
          id={id}
          itemType={type}
          remove={remove}
          calculated={calculated}
        />
      )
    }
    <AddItem add={add} itemType={itemType} responsible={responsible}/>
  </div>
)

List.propTypes = {
  add: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  responsible: PropTypes.string.isRequired
}

export default List
