import React from 'react';
import PropTypes from 'prop-types';
import { decorate } from '@hbagroup/instant-react/utils/component';

import CorePageNotFound from '@hbagroup/instant-react/components/PageNotFound';

const styles = theme => ({
  root: {
    marginTop: 100,
  },
});

function PageNotFound(props) {
  const { classes } = props;

  return <CorePageNotFound className={classes.root} />;
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default decorate(styles)(PageNotFound);
