import React from 'react'

import '../styles/loader.scss'

const Loader = () =>
  <div className="loader">
    <div className="spinner">
      <div className="bounce1"/>
      <div className="bounce2"/>
      <div className="bounce3"/>
    </div>
  </div>

export default Loader
