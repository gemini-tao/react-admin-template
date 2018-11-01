/*
 * @Author: lifan
 * @Date: 2018-11-01 13:31:41
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 22:54:01
 */
/* eslint-disable */
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import hashHistory from './history';
import ROUTES from './routes';
import RenderRoutes from '../components/RenderRoutes';

const RootRouter = () => (
  <ConnectedRouter history={hashHistory}>
    <RenderRoutes routes={ROUTES} />
  </ConnectedRouter>
);

export default RootRouter;
