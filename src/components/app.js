import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

const App = ({ add, remove, edit, items }) => (
  <div>
    <ul>
      {
        items.map(item =>
          <li key={item.id}>{JSON.stringify(item)}</li>
        )
      }
    </ul>
    <p onClick={() => add({ test: 'test' })}>Add</p>
  </div>
)

export default connect(
  state => ({ items: state }),
  dispatch => bindActionCreators(actions, dispatch)
)(App)
