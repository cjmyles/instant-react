import React from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import Layout from 'instant-react-core/layouts/Default';
import { auth } from 'instant-react-core/utils/firebase';

import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/HelpOutline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';

const styles = theme => ({
  appBar: {
    // backgroundColor: 'transparent',
    // boxShadow: 'none',
  },
  sidebar: {},
  main: {
    backgroundColor: theme.palette.background.default,
  },
});

const unauthenticatedLinks = [{ label: 'About', to: '/about', icon: HelpIcon }];
const authenticatedLinks = [
  { label: 'Dashboard', to: '/', icon: DashboardIcon },
  { label: 'About', to: '/about', icon: HelpIcon },
  { label: 'Profile', to: '/profile', icon: AccountBoxIcon },
  {
    label: 'Sign Out',
    icon: PowerIcon,
    action: () => {
      auth.signOut();
    },
  },
];

function DefaultLayout(props) {
  const { children, classes } = props;

  return (
    <Layout
      variant="dashboard"
      /*appBarLogo={{
        height: 50,
        url: '',
      }}*/
      appBarTitle={CONFIG.app.title}
      unauthenticatedLinks={unauthenticatedLinks}
      authenticatedLinks={authenticatedLinks}
      classes={{
        appBar: classes.appBar,
        sidebar: classes.sidebar,
        main: classes.main,
      }}
    >
      {children}
    </Layout>
  );
}

DefaultLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default decorate(styles)(DefaultLayout);
