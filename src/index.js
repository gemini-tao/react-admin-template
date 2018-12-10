/*
 * @Author: lifan
 * @Date: 2018-10-26 14:51:40
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-10 10:22:50
 */
/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { Button, notification, Icon } from 'antd';
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

/* eslint-disable-next-line */
function update (registration) {
  try {
    registration.waiting.postMessage('skipWaiting');
  } catch (e) {
    window.location.reload();
  }
}

const openNotification = (registration) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" onClick={() => update(registration)}>
      升级
    </Button>
  );
  notification.open({
    message: '发现新版本',
    description: '本次升级添加了新功能，修复了一些bug,为了您更好的体验，请点击升级',
    duration: null,
    placement: 'bottomRight',
    icon: <Icon type="smile" theme="twoTone" style={{ color: '#108ee9' }} />,
    btn,
    key,
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: openNotification,
});
