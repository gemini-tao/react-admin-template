/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-05 16:52:52
 */
import { lazy } from 'react';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';
import BasicLayout from '../layouts/BasicLayout';
import LoginLayout from '../layouts/LoginLayout';
// import Demo from '../pages/Demo';
// import Test from '../pages/Test';
// const BasicLayout = lazy(() => import(/* webpackChunkName: 'BasicLayout' */'../layouts/BasicLayout'));
// const LoginLayout = lazy(() => import(/* webpackChunkName: 'test' */'../layouts/LoginLayout'));
// const Exception403 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/403'));
// const Exception404 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/404'));
// const Exception500 = lazy(() => import(/* webpackChunkName: 'Exception' */'../pages/Exception/500'));
const Demo = lazy(() => import(/* webpackChunkName: 'Demo' */'../pages/Demo'));
const Test = lazy(() => import(/* webpackChunkName: 'test' */'../pages/Test'));


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
        name: '测试test',
        icon: 'dashboard',
        component: Test,
      },
      {
        path: '/demo',
        name: '测试test',
        icon: 'form',
        authority: ['admin'],
        component: Demo,
      },
      {
        path: '/403',
        hideInMenu: true,
        component: Exception403,
      },
      {
        path: '/404',
        hideInMenu: true,
        component: Exception404,
      },
      {
        path: '/500',
        hideInMenu: true,
        component: Exception500,
      },
    ],
  },
];

export default routes;
