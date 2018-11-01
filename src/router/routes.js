/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 19:49:31
 */
import { lazy } from 'react';

const BasicLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/BasicLayout'));
const LoginLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/LoginLayout'));
const Demo = lazy(() => import(/* webpackChunkName: 'test' */'../pages/Demo'));
const Test = lazy(() => import(/* webpackChunkName: 'test' */'../pages/Test'));

const routes = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/test',
        component: Test,
      },
      {
        path: '/demo',
        component: Demo,
      },
    ],
  },
  {
    path: '/login',
    component: LoginLayout,
  },
];

export default routes;
