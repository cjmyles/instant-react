import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import PageHeading from 'instant-react-core/components/PageHeading';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
});

class Settings extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <PageHeading title="Settings" />
        <div className={classes.root} />
      </Fragment>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default decorate(styles)(Settings);
