import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import MainView from './MainView';
import Header from './Header';
import Loader from './Loader';
import Login from './Login';
import { getTheme, setGobalThemeStyling } from '../helpers/theme';

const App = ({
  authenticationInitialized,
  initialized,
  loggedIn,
  useDarkMode,
}) => {
  useEffect(() => {
    setGobalThemeStyling(getTheme());
  }, [useDarkMode]);

  return (
    <ThemeProvider theme={getTheme()}>
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
    </ThemeProvider>
  );
};

App.propTypes = {
  authenticationInitialized: PropTypes.bool.isRequired,
  initialized: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  useDarkMode: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
    initialized: state.items.initialized && state.authentication.initialized,
    authenticationInitialized: state.authentication.initialized,
    useDarkMode: state.theme.useDarkMode,
  };
}

export default connect(mapStateToProps)(App);
