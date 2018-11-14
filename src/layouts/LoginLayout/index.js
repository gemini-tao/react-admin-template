/*
 * @Author: lifan
 * @Date: 2018-11-01 22:00:18
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-14 15:48:28
 */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 21:59:54
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

/* eslint-disable */
const {
  Header, Footer, Sider, Content,
} = Layout;

class LoginLayout extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        login
      </div>
    );
  }
}

export default LoginLayout;
