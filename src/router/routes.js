/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 16:16:56
 */
import { lazy } from 'react';
import Demo from '../pages/Demo';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';

const BasicLayout = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../layouts/BasicLayout'));
const LoginLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/LoginLayout'));
// const Demo = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../pages/Demo'));
const Test = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../pages/Test'));

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
