/*
 * @Author: lifan
 * @Date: 2018-11-07 11:01:00
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-07 11:23:21
 */
import createRematchPersist from '@rematch/persist';
import { createMigrate } from 'redux-persist'; // eslint-disable-line
import createLoadingPlugin from '@rematch/loading';
import selectorsPlugin from '@rematch/select';

const isProduction = process.env.NODE_ENV === 'production';

// persist数据持久化插件
const persistPlugin = (() => {
  // persist版本升级时的数据迁移
  const migrations = {
    0: state => ({
      ...state,
    }),
  };

  return createRematchPersist({
    key: 'root',
    whitelist: ['user', 'settings'],
    throttle: 1000,
    version: 1,
    migrate: createMigrate(migrations, { debug: !isProduction }),
  });
})();

// loading插件
const loading = createLoadingPlugin({
  whitelist: ['settings/triggerMenuCollapsedAsync'],
});

// selector插件
const selectPlugin = selectorsPlugin();

export default [
  loading,
  selectPlugin,
  persistPlugin,
];
