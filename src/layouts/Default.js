import React from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import Layout from 'instant-react-core/layouts/Default';

import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/HelpOutline';

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

const links = [
  { label: 'Settings', to: '/settings', icon: SettingsIcon },
  { label: 'About', to: '/about', icon: HelpIcon },
];

function DefaultLayout(props) {
  const { children, classes } = props;

  return (
    <Layout
      variant="default"
      /*appBarLogo={{
        height: 50,
        url: '',
      }}*/
      appBarTitle={CONFIG.app.title}
      sidebarLinks={links}
      mobileLinks={links}
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
  auth: PropTypes.object,
};

export default decorate(styles, 'auth')(DefaultLayout);
