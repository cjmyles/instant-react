import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { decorate } from '@hbagroup/instant-react/utils/component';
import PageHeading from '@hbagroup/instant-react/components/PageHeading';
import app from '@hbagroup/instant-react/utils/firebase';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
});

function About(props) {
  const { classes } = props;

  return (
    <Fragment>
      <PageHeading title="About" />

      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemText
              primary="Application Name"
              secondary={process.env.REACT_APP_NAME}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText
              primary="Version"
              secondary={process.env.REACT_APP_VERSION}
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText
              primary="Firebase Project Id"
              secondary={app.options.projectId}
            />
          </ListItem>
          <Divider />
        </List>
      </div>
    </Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default decorate(styles)(About);
