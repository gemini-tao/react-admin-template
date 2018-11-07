/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:30
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-07 14:03:29
 */
import { init } from '@rematch/core';
import { connectRouter } from 'connected-react-router';
import history from '../router/history';
import plugins from './plugins';
import * as models from './models';

const isProduction = process.env.NODE_ENV === 'production';

const store = init({
  models,
  redux: {
    rootReducers: {
      RESET: () => undefined,
    },
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {
      disabled: isProduction,
    },
  },
  plugins: [...plugins],
});

/**
 * 获取selector数据
 * @param {String} modelName model名称
 * @param {String} selector selector名称
 */
export const getSelector = (modelName, selector) => store.select[modelName][selector](store.getState());

export const { select } = store;

export default store;
