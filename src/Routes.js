import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import asyncComponent from 'instant-react-core/components/AsyncComponent';
import UnauthenticatedRoute from 'instant-react-core/components/UnauthenticatedRoute';
import CoreRoute from 'instant-react-core/components/CoreRoute';
// import AuthenticatedRoute from 'instant-react-core/components/AuthenticatedRoute';
// import AppliedRoute from 'instant-react-core/components/AppliedRoute';

// Layouts
const AsyncDefaultLayout = asyncComponent(() => import('layouts/Default'));

// Containers
const AsyncSignIn = asyncComponent(() => import('containers/SignIn'));
const AsyncHome = asyncComponent(() => import('containers/Home'));
const AsyncAbout = asyncComponent(() => import('containers/About'));
const AsyncProfile = asyncComponent(() => import('containers/Profile'));
const AsyncSettings = asyncComponent(() => import('containers/Settings'));
const AsyncNotFound = asyncComponent(() => import('containers/PageNotFound'));

// Routes
export default ({ childProps }) => (
  <Switch>
    {/* Core Routes */}
    <CoreRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
      layout={AsyncDefaultLayout}
    />

    <CoreRoute
      path="/about"
      exact
      component={AsyncAbout}
      layout={AsyncDefaultLayout}
      props={childProps}
    />

    {CONFIG.app.useAuth && (
      <Fragment>
        <UnauthenticatedRoute
          path="/signin"
          exact
          component={AsyncSignIn}
          props={childProps}
          layout={AsyncDefaultLayout}
        />

        <CoreRoute
          path="/profile"
          exact
          component={AsyncProfile}
          layout={AsyncDefaultLayout}
          props={childProps}
        />

        <CoreRoute
          path="/settings"
          exact
          component={AsyncSettings}
          layout={AsyncDefaultLayout}
          props={childProps}
        />
      </Fragment>
    )}

    {/* Custom Routes */}
    {/* ... */}

    {/* Finally, catch all unmatched routes */}
    <UnauthenticatedRoute
      component={AsyncNotFound}
      layout={AsyncDefaultLayout}
    />
  </Switch>
);
