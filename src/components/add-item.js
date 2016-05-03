import React, { PropTypes } from 'react'

import '../styles/add-item.scss'

const AddItem = ({ add }) => {
  let amountInput;
  let titleInput;

  return (
    <form className="add-item" onSubmit={e => {
      const item = {
        amount: Number(amountInput.value),
        title: titleInput.value
      }

      e.preventDefault()
      add(item)
    }}>
      <input ref={c => titleInput = c} name="title" className="add-item--input-title" type="text"/>
      <input ref={c => amountInput = c} name="amount" className="add-item--input-amount" type="number"/>
      <button type="submit" className="add-item--submit">Submit</button>
    </form>
  )
}

AddItem.propTypes = {
  add: PropTypes.func.isRequired
}

export default AddItem
