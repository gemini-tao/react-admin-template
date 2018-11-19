/*
 * @Author: lifan
 * @Date: 2018-11-01 13:59:24
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-19 12:35:08
 */
import { lazy } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import LoginLayout from '../layouts/LoginLayout';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';

/**
 * @desc 路由表详细配置
 * @param {string} path 路径
 * @param {string} name 菜单名称, 为空时不在菜单中显示
 * @param {string} icon 菜单图标type，可为空， 目前仅支持antd中Icon
 * @param {bool} hideInMenu 是否在菜单中隐藏， 为空或false时不隐藏
 * @param {string} redirect 重定向路径，可为空
 * @param {string | array} authority 路由权限，当用户权限与用户权限不符时菜单中不显示，可选值为： admin-管理员 kf-客服 user-用户， 为空时默认所有权限都可以访问
 * @param {Function Components | Class Components} component 加载组件
 *        异步加载时采用如下写法： lazy(() => import(\/* webpackChunkName: 'test' *\/'../pages/Test'))
 * @param {array} routes 子路由，可为空，配置同上
 */
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
      { path: '/', redirect: '/gis' },
      {
        path: '/gis',
        name: 'GIS地图',
        icon: 'compass',
        component: lazy(() => import(/* webpackChunkName: 'test' */'../pages/Test')),
      },
      {
        path: '/project',
        name: '工程运行',
        icon: 'project',
        // authority: ['admin'],
        component: lazy(() => import(/* webpackChunkName: 'Demo' */'../pages/Demo')),
        routes: [
          {
            path: '/project/finish',
            name: '已投运泵站',
            hideInMenu: false,
            component: Exception404,
            routes: [
              {
                path: '/project/finish/123',
                name: '123',
                component: Exception404,
              },
            ],
          },
          {
            path: '/project/notfinish',
            name: '未投运泵站',
            // exact: true,
            component: Exception404,
          },
        ],
      },
      {
        path: '/customer-service',
        name: '客户服务',
        icon: 'customer-service',
        // authority: ['admin'],
        component: Exception404,
        routes: [
          {
            path: '/customer-service/dispatch',
            name: '派单',
            component: Exception404,
          },
        ],
      },
      {
        path: '/data-statistics',
        name: '数据统计',
        icon: 'dot-chart',
        component: Exception404,
        routes: [
          {
            path: '/data-statistics/error',
            name: '故障统计',
            component: Exception404,
          },
          {
            path: '/data-statistics/state',
            name: '状态统计',
            component: Exception404,
          },
          {
            path: '/data-statistics/water',
            name: '城市用水统计',
            component: Exception404,
          },
          {
            path: '/data-statistics/time',
            name: '使用时间统计',
            component: Exception404,
          },
          {
            path: '/data-statistics/parts',
            name: '零配件统计',
            component: Exception404,
          },
        ],
      },
      {
        path: '/data-collection',
        name: '资料收集',
        icon: 'database',
        component: Exception404,
        routes: [
          {
            path: '/data-collection/irrigation',
            name: '农田灌溉',
            component: Exception404,
          },
          {
            path: '/data-collection/water-level',
            name: '城市河道水位',
            component: Exception404,
          },
        ],
      },
      {
        path: '/payment',
        name: '缴费',
        icon: 'property-safety',
        component: Exception404,
      },
      {
        path: '/base-info',
        name: '基础信息',
        icon: 'solution',
        component: Exception404,
        routes: [
          {
            path: '/base-info/repair-order',
            name: '维修订单',
            component: Exception404,
          },
          {
            path: '/base-info/flow-meter',
            name: '流量计',
            component: Exception404,
          },
          {
            path: '/base-info/parts-manage',
            name: '配件管理',
            component: Exception404,
          },
          {
            path: '/base-info/pump-station',
            name: '泵站管理',
            component: Exception404,
          },
          {
            path: '/base-info/org',
            name: '组织构架',
            component: Exception404,
          },
          {
            path: '/base-info/dvr',
            name: '硬盘录像机',
            component: Exception404,
          },
        ],
      },
      {
        path: '/set',
        name: '系统设置',
        icon: 'setting',
        component: Exception404,
        routes: [
          {
            path: '/set/user-info',
            name: '用户信息',
            component: Exception404,
          },
          {
            path: '/set/authority',
            name: '权限控制',
            component: Exception404,
          },
        ],
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
