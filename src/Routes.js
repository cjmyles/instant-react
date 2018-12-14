import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import asyncComponent from '@hbagroup/instant-react/components/AsyncComponent';
import UnauthenticatedRoute from '@hbagroup/instant-react/components/UnauthenticatedRoute';
import AuthenticatedRoute from '@hbagroup/instant-react/components/AuthenticatedRoute';

// Determine if the core routes should require authentication
const CoreRoute = CONFIG.app.useAuth
  ? AuthenticatedRoute
  : UnauthenticatedRoute;

// Layouts
const AsyncDefaultLayout = asyncComponent(() => import('layouts/Default'));

// Core Components
const AsyncSignIn = asyncComponent(() => import('containers/SignIn'));
const AsyncHome = asyncComponent(() => import('containers/Home'));
const AsyncAbout = asyncComponent(() => import('containers/About'));
const AsyncProfile = asyncComponent(() => import('containers/Profile'));
const AsyncSettings = asyncComponent(() => import('containers/Settings'));
const AsyncNotFound = asyncComponent(() => import('containers/PageNotFound'));

// Custom Components
// ...

export default ({ childProps }) => (
  <Switch>
    {/* Core Components */}
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

    {/* Custom Components */}
    {/* ... */}

    {/* Finally, catch all unmatched routes */}
    <UnauthenticatedRoute
      component={AsyncNotFound}
      layout={AsyncDefaultLayout}
    />
  </Switch>
);
