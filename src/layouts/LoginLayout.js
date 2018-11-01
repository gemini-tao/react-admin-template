/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 14:51:46
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
      <div>
        login
      </div>
    );
  }
}

export default BasicLayout;
