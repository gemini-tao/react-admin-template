/*
 * @Author: lifan
 * @Date: 2018-11-01 13:31:41
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 19:59:42
 */
import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import hashHistory from './history';
import ROUTES from './routes';
import ErrorBoundary from '../components/ErrorBoundary';
import RenderRoutes from '../components/RenderRoutes';

const RootRouter = () => (
  <ConnectedRouter history={hashHistory}>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <RenderRoutes routes={ROUTES} />
      </Suspense>
    </ErrorBoundary>
  </ConnectedRouter>
);

export default RootRouter;
