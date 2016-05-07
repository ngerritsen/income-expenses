import React, { PropTypes } from 'react'

import '../styles/loader.scss'

const Loader = () => (
  <div className="loader">
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  </div>
)

export default Loader
