import React, { PropTypes } from 'react'

import '../styles/add-item.scss'

const AddItem = ({ add, itemType, responsible }) => {
  let amountInput;
  let titleInput;

  return (
    <form className="add-item" onSubmit={e => {
      e.preventDefault()
      addItem(add, amountInput, titleInput, itemType, responsible)
    }}>
      <input
        ref={c => titleInput = c}
        name="title"
        className="add-item--input-title"
        placeholder="Naam"
        type="text"
      />
      <input
        ref={c => amountInput = c}
        name="amount"
        className="add-item--input-amount"
        placeholder="Bedrag"
        type="number"
      />
      <button type="submit" className="add-item--submit">Submit</button>
    </form>
  )
}

function addItem (add, amountInput, titleInput, itemType, responsible) {
  const amount = amountInput.value
  const title = titleInput.value
  const item = {
    amount: Number(amount),
    title,
    itemType,
    responsible
  }

  if (amount.trim() !== '' && title.trim() !== '') {
    add(item)
    amountInput.value = ''
    titleInput.value = ''
    titleInput.focus()
  }
}

AddItem.propTypes = {
  add: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  responsible: PropTypes.string.isRequired
}

export default AddItem
