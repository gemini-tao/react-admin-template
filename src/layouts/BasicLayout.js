/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 12:37:08
 */
/* eslint-disable */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Redirect, Route } from 'react-router-dom';
import RenderRoutes from '../components/RenderRoutes';

const {
  Header, Footer, Sider, Content,
} = Layout;

class BasicLayout extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { routes } = this.props;
    return (
      <Layout style={{ position: 'fixed', width: '100%', height: '100%',}}>
        <Sider width={256} style={{ minHeight: '100%', color: 'white', }}>
          Sider
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0', }}>
            <div>
              <Switch>
                <Redirect exact from='/' to='/test'/>
                <Route render={() => <RenderRoutes routes={routes} />} />
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
