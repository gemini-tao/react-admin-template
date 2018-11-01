/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 14:48:05
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

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
      <Layout style={{ position: 'fixed', width: '100%', height: '100%',}}>
        <Sider width={256} style={{ minHeight: '100%', color: 'white', }}>
          Sider
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0', height: '3000px', }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Switch>
              <Route exact path="/test" render={() => (<div>test</div>)} />
              <Route render={() => (<div>Miss</div>)} />
            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
