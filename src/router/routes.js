/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-04 12:35:19
 */
import { lazy } from 'react';
import Demo from '../pages/Demo';

const BasicLayout = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../layouts/BasicLayout'));
const LoginLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/LoginLayout'));
// const Demo = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../pages/Demo'));
const Test = lazy(() => import(/* webpackChunkName: 'test' */'../pages/Test'));
const Exception403 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/403'));
const Exception404 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/404'));
const Exception500 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/500'));

const routes = [
  {
    path: '/login',
    component: LoginLayout,
  },
  // '/'一定要放在最下面
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
        authority: ['admin'],
        component: Demo,
      },
      {
        path: '/403',
        component: Exception403,
      },
      {
        path: '/404',
        component: Exception404,
      },
      {
        path: '/500',
        component: Exception500,
      },
    ],
  },
];

export default routes;
