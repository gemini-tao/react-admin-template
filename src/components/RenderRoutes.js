/* eslint-disable react/jsx-one-expression-per-line */
/*
 * @Author: lifan
 * @Date: 2018-11-01 21:57:48
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 12:36:42
 */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import ErrorBoundary from './ErrorBoundary';
import Loading from './Loading';

let role = '';

export const RenderSubRoutes = route => (
  <AuthorizedRoute
    path={route.path}
    authority={route.authority}
    exact={route.exact}
    strict={route.strict}
    role={role}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RenderRoutes = ({ routes }) => (
  <ErrorBoundary>
    <Suspense fallback={<Loading tip="loading..." style={{ margin: '60px auto' }} />}>
      <Switch>
        {
          routes.map(route => <RenderSubRoutes key={route.path} {...route} />)
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};

RenderRoutes.setAuthority = (authority) => {
  role = authority;
};

export default RenderRoutes;
