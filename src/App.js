import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import LoadingPanel from 'instant-react-core/components/LoadingPanel';

import { auth } from 'instant-react-core/utils/firebase';
import * as authActions from 'redux/modules/auth';
import * as clientActions from 'redux/modules/client';

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
    } else {
      this.setState({ isAuthenticating: false });
    }
  }

  render() {
    const { client } = this.props;
    const theme = client ? client.theme : {};
    const isAuthenticating = this.isAuthenticating;

    return isAuthenticating ? (
      <LoadingPanel />
    ) : (
      <Theme theme={theme}>
        <Routes />
      </Theme>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
  client: PropTypes.object,
  authActions: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default decorate(
  styles,
  ['auth', 'client'],
  { authActions, clientActions },
  { withRouter: true }
)(App);
