/* eslint-disable indent */
/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:30
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-04 22:33:29
 */
import { init } from '@rematch/core';
import { routerMiddleware } from 'connected-react-router';
import createRematchPersist from '@rematch/persist';
/* eslint-disable-next-line */
import { createMigrate } from 'redux-persist';
import createLoadingPlugin from '@rematch/loading';
import selectorsPlugin from '@rematch/select';
import history from '../router/history';
import routerReducer from './routerReducer';
import * as models from './models';

const isProduction = process.env.NODE_ENV === 'production';

const migrations = {
  0: state => ({
    ...state,
  }),
};

const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['user', 'settings'],
  throttle: 1000,
  version: 1,
  migrate: createMigrate(migrations, { debug: true }),
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

export const getSelector = (modelName, selector) => store.select[modelName][selector](store.getState());

export const { select } = store;

export default store;
