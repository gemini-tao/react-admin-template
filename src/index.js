/*
 * @Author: lifan
 * @Date: 2018-10-26 14:51:40
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-07 16:58:34
 */
/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
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
    // eslint-disable-next-line no-alert
    if (window.confirm('监测到更新，点击更新')) {
      try {
        registration.waiting.postMessage('skipWaiting');
      } catch (e) {
        window.location.reload();
      }
    }
  },
});
