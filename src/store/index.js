/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:30
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-30 20:32:29
 */
import { init } from '@rematch/core';
import { routerMiddleware } from 'connected-react-router';
import history from '../router/history';
import routerReducer from './routerReducer';
import * as models from './models';

const isProduction = process.env.NODE_ENV === 'production';

const store = init({
  models,
  redux: {
    reducers: {
      router: routerReducer(history),
    },
    devtoolOptions: {
      disabled: isProduction,
    },
    middlewares: [
      routerMiddleware(history),
    ],
  },
});

export default store;
