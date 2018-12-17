import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';
import PageHeading from 'instant-react-core/components/PageHeading';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginBottom: theme.spacing.unit * 3,
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <PageHeading title="Home" />
        <div className={classes.root} />
      </Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
};

export default decorate(styles)(Home);
