/*
 * @Author: lifan
 * @Date: 2018-11-01 21:57:48
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-13 12:06:14
 */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import TweenOne from 'rc-tween-one';
import AuthorizedRoute from './AuthorizedRoute';
import ErrorBoundary from './ErrorBoundary';
import TopLoading from './TopLoading';

let role = '';

const animation = [
  {
    translateX: 20,
    opacity: 0,
    duration: 0,
  },
  {
    translateX: 0,
    opacity: 1,
    duration: 450,
  },
];

export const RenderSubRoutes = route => (
  <AuthorizedRoute
    path={route.path}
    authority={route.authority}
    exact={route.exact}
    strict={route.strict}
    role={role}
    render={(props) => {
      if (route.path === '/' || route.path === '/login') {
        return <route.component {...props} routes={route.routes} />;
      }
      return (
        <TweenOne animation={animation}>
          <route.component {...props} routes={route.routes} />
        </TweenOne>
      );
    }}
  />
);

const RouterView = ({ routes }) => (
  <ErrorBoundary>
    <Suspense fallback={<TopLoading />}>
      <Switch>
        {
          routes.map(route => <RenderSubRoutes key={route.path} {...route} />)
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

RouterView.propTypes = {
  routes: PropTypes.array.isRequired,
};

RouterView.setAuthority = (authority) => {
  role = authority;
};

export default RouterView;
