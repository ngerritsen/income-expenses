import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainView from './MainView';
import Header from './Header';
import Loader from './Loader';
import Login from './Login';

const App = ({ initialized, loggedIn }) => {
  return (
    <div>
      <Header/>
      <div className="container">
        {(() => {
          if (!loggedIn) {
            return <Login/>;
          }

          if (!initialized) {
            return <Loader/>;
          }

          return <MainView/>;
        })()}
      </div>
    </div>
  );
};

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
    initialized: state.items.initialized
  };
}

export default connect(mapStateToProps)(App);
