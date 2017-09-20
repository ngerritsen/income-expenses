import React from 'react'
import PropTypes from 'prop-types'

import Item from './item'
import ItemInput from './item-input'

import '../styles/list.scss'

const List = ({ add, edit, items, itemType, responsible, remove, toggleEditMode }) =>
  <div className="list">
    {items
      .filter(item => itemType === item.itemType && responsible === item.responsible)
      .filter(({ amount }) => amount > 0)
      .map(({ amount, id, itemType: type, responsible: res, title, calculated, editMode }, index) =>
        <Item
          key={id || index}
          amount={amount}
          title={title}
          id={id}
          itemType={type}
          remove={remove}
          responsible={responsible}
          calculated={calculated}
          edit={edit}
          editMode={editMode}
          toggleEditMode={toggleEditMode}
        />
      )
    }
    <ItemInput action={add} itemType={itemType} responsible={responsible} actionText="Toevoegen"/>
  </div>

List.propTypes = {
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  responsible: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired
}

export default List
