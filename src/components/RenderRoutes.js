import React from 'react';
import { Route } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';

export const RenderSubRoutes = route => (
  <AuthorizedRoute
    path={route.path}
    authority={route.authority}
    exact={route.exact}
    strict={route.strict}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

/* eslint-disable-next-line */
const RenderRoutes = ({ routes, isExact }) => (
  <Route render={props => routes.map((route) => {
    if (route.path === '/') {
      return <RenderSubRoutes key={route.path} exact={isExact} {...route} {...props} />;
    }
    return <RenderSubRoutes key={route.path} {...route} {...props} />;
  })}
  />
);

export default RenderRoutes;
