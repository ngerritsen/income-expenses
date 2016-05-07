import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { MAN, WOMAN, SHARED } from '../constants'

import * as actions from '../actions'
import Sheet from './sheet'
import Header from './header'
import { getCalculatedItems } from '../helpers/calculated-items'

const App = ({ add, items, remove }) => (
  <div>
    <Header/>
    <Sheet add={add} items={items} remove={remove} responsible={MAN} title="Niels"/>
    <Sheet add={add} items={items} remove={remove} responsible={WOMAN} title="Peggy"/>
    <Sheet add={add} items={items} remove={remove} responsible={SHARED} title="Gezamelijk"/>
  </div>
)

App.propTypes = {
  add: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  const calculatedItems = getCalculatedItems(state)
  const items = [ ...state, ...calculatedItems ]

  return { items }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
