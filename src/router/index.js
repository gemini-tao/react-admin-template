/*
 * @Author: lifan
 * @Date: 2018-11-01 13:31:41
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 15:11:23
 */
import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import hashHistory from './history';
import routes from './routes';
import ErrorBoundary from '../components/ErrorBoundary';

const RootRouter = () => (
  <ConnectedRouter history={hashHistory}>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map(({ path, component: Com, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact
                render={(history, match, location) => <Com {...rest} history={history} match={match} location={location} />}
              />
            ))
          }
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </ConnectedRouter>
);

export default RootRouter;
