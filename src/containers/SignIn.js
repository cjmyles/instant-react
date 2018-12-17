import React from 'react';
import PropTypes from 'prop-types';
import { decorate } from 'instant-react-core/utils/component';

import CoreSignIn from 'instant-react-core/components/SignIn';

const styles = theme => ({
  root: {
    marginTop: 100,
  },
});

function SignIn(props) {
  const { classes } = props;

  return <CoreSignIn className={classes.root} />;
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default decorate(styles)(SignIn);
