/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:30
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 16:22:49
 */
import { init } from '@rematch/core';
import { routerMiddleware } from 'connected-react-router';
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import selectorsPlugin from '@rematch/select';
import history from '../router/history';
import routerReducer from './routerReducer';
import * as models from './models';

const isProduction = process.env.NODE_ENV === 'production';
const persistPlugin = createRematchPersist({
  whitelist: ['user'],
  throttle: 5000,
  version: 1,
});
const loading = createLoadingPlugin({
  blacklist: ['updated'],
});
const selectPlugin = selectorsPlugin();

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
  plugins: [loading, selectPlugin, persistPlugin],
});

/* eslint max-len: ["error", { "code": 120 }] */
export const getSelector = (modelName, selector) => store.select[modelName][selector](store.getState());

export const { select } = store;

export default store;
