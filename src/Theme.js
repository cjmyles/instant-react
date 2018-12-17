import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import classNames from 'classnames';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createBaseline, addOverrides } from 'config/theme';

const styles = theme => ({
  root: {
    overflow: 'auto',
    // color: theme.palette.primary.contrastText,
    // backgroundImage: `radial-gradient(${theme.palette.primary.light},${
    //   theme.palette.primary.dark
    // })`,
  },
});

class Root extends Component {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classNames('viewport', classes.root)}>{children}</div>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

Root = decorate(styles)(Root);

class Theme extends Component {
  render() {
    const { theme, children } = this.props;
    const baseline = createBaseline(theme);
    const withOverrides = addOverrides(baseline);
    const muiTheme = createMuiTheme(withOverrides);

    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />

        <Root>{children}</Root>
      </MuiThemeProvider>
    );
  }
}

export default Theme;
