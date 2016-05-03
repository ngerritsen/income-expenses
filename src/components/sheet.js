import React, { PropTypes } from 'react'

import Item from './item'

const Sheet = ({ items }) => (
  <div>
    {items.map(({ amount, id, title }) =>
      <Item key={id} amount={amount} title={title}/>
    )}
  </div>
)

Sheet.propTypes = {
  items: PropTypes.array.isRequired
}

export default Sheet
