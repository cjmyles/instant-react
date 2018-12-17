import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import PageHeading from 'instant-react-core/components/PageHeading';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
});

class Profile extends Component {
  render() {
    const { auth } = this.props;

    return (
      <Fragment>
        <PageHeading title="Profile" />

        <List>
          <ListItem>
            <ListItemText
              primary="Display Name"
              secondary={auth.user.displayName || 'Unknown'}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Email" secondary={auth.user.email} />
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default decorate(styles, 'auth')(Profile);
