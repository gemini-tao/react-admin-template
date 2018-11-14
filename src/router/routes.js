/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-14 16:12:50
 */
import BasicLayout from '../layouts/BasicLayout';
import LoginLayout from '../layouts/LoginLayout';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
// import Exception500 from '../pages/Exception/500';

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
      { path: '/', redirect: '/test' },
      {
        path: '/test',
        name: '测试test',
        icon: 'dashboard',
        component: () => import(/* webpackChunkName: 'test' */'../pages/Test'),
        routes: [
          {
            path: '/test/4031',
            name: '403',
            component: () => import(/* webpackChunkName: 'Test2' */'../pages/Exception/500'),
          },
          {
            path: '/test/4041',
            name: '404',
            component: () => import(/* webpackChunkName: 'Test1' */'../pages/Exception/500'),
          },
        ],
      },
      {
        path: '/demo',
        name: '测试test',
        icon: 'form',
        authority: ['admin'],
        component: () => import(/* webpackChunkName: 'Demo' */'../pages/Demo'),
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
      // {
      //   path: '/500',
      //   hideInMenu: true,
      //   component: Exception500,
      // },
      // {
      //   path: '/gis',
      //   name: 'GIS系统',
      //   icon: 'dashboard',
      //   component: Exception500,
      // },
    ],
  },
];

export default routes;
