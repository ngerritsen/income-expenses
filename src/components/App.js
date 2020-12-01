import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainView from './MainView';
import Header from './Header';
import Loader from './Loader';
import Login from './Login';

const App = ({ authenticationInitialized, initialized, loggedIn }) => {
  return (
    <div>
      <Header />
      <div className="container">
        {(() => {
          if (authenticationInitialized && !loggedIn) {
            return <Login />;
          }

          if (!initialized) {
            return <Loader />;
          }

          return <MainView />;
        })()}
      </div>
    </div>
  );
};

App.propTypes = {
  authenticationInitialized: PropTypes.bool.isRequired,
  initialized: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
    initialized: state.items.initialized && state.authentication.initialized,
    authenticationInitialized: state.authentication.initialized,
  };
}

export default connect(mapStateToProps)(App);
