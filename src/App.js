import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import LoadingPanel from 'instant-react-core/components/LoadingPanel';

import { auth } from 'instant-react-core/utils/firebase';
import * as authActions from 'redux/modules/auth';

import Theme from './Theme';
import Routes from './Routes';

const styles = theme => ({});

class App extends Component {
  get isAuthenticating() {
    return CONFIG.app.useAuth ? this.props.auth.isAuthenticating : false;
  }

  handleAuthStateChanged = authUser => {
    this.props.authActions.authStateChanged(authUser);
  };

  async componentDidMount() {
    if (CONFIG.app.useAuth) {
      auth.onAuthStateChanged(this.handleAuthStateChanged);
    }
  }

  render() {
    const theme = {};

    return this.isAuthenticating ? (
      <LoadingPanel />
    ) : (
      <Theme theme={theme}>
        <Routes />
      </Theme>
    );
  }
}

// Note: although we don't reference `this.history` explicitly in this component, the `router` is required for app routing
App.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
  authActions: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default decorate(styles, 'auth', { authActions }, { withRouter: true })(
  App
);
