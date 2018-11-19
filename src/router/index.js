/*
 * @Author: lifan
 * @Date: 2018-11-01 13:31:41
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-19 12:30:02
 */
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import hashHistory from './history';
import ROUTES from './routes';
import RouterView from '../components/RouterView';
import store from '../store';

RouterView.setAuthority(store.getState().user.role);

const RootRouter = () => (
  <ConnectedRouter history={hashHistory}>
    <RouterView routes={ROUTES} />
  </ConnectedRouter>
);

export default RootRouter;
