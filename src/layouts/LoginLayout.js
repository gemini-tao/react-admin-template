/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 19:25:05
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

/* eslint-disable */
const {
  Header, Footer, Sider, Content,
} = Layout;

class BasicLayout extends Component {
  componentDidMount() {
    console.log(this.props.history)
  }

  render() {
    return (
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'red', zIndex: 100,}}>
        login
      </div>
    );
  }
}

export default BasicLayout;
