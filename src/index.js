/*
 * @Author: lifan
 * @Date: 2018-10-26 14:51:40
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-22 21:04:59
 */
/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { notification } from 'antd';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from './store';
import RootRouter from './router';
import * as serviceWorker from './utils/serviceWorker';
import 'normalize.css';
import './assets/scss/index.scss';


const persistor = getPersistor();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (registration) => {
    notification.info({
      message: '发现新版',
      description: '下次重新打开浏览器即可更新',
    });
    console.log(registration); // eslint-disable-line
  },
  onSuccess: (registration) => {
    notification.success({
      message: '版本更新成功',
      description: '版本更新成功',
    });
    console.log(registration); // eslint-disable-line
  },
});
