/*
 * @Author: lifan
 * @Date: 2018-11-04 12:28:25
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-19 12:38:03
 */
/* eslint-disable-next-line */
import React, { Component } from 'react';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

class TopLoading extends Component {
  componentDidMount() {
    NProgress.start();
  }

  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    return null;
  }
}


export default TopLoading;
