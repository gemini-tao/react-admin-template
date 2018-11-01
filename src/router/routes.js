/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-11-01 13:59:24
 */
import { lazy } from 'react';
// import BasicLayout from '../layouts/BasicLayout';
const BasicLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/BasicLayout'));
const LoginLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/LoginLayout'));

const routes = [
  {
    path: '/',
    component: BasicLayout,
  },
  {
    path: '/login',
    component: LoginLayout,
  },
];

export default routes;
