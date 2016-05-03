import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Sheet from './sheet'
import AddItem from './add-item'

import '../styles/app.scss'

const App = ({ add, edit, items, remove }) => (
  <div className="app">
    <Sheet items={items}/>
    <AddItem add={add}/>
  </div>
)

App.propTypes = {
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

export default connect(
  state => ({ items: state }),
  dispatch => bindActionCreators(actions, dispatch)
)(App)
