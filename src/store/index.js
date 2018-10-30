/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:30
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-30 16:14:39
 */
import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

export default store;
