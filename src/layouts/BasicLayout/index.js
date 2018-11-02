/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 23:04:57
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Switch, Redirect, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import RenderRoutes from '../../components/RenderRoutes';

const {
  Header, Footer, Sider, Content,
} = Layout;

class BasicLayout extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
  }

  state = {
    height: 0,
  };

  calcWindowHeight = debounce(() => {
    const height = document.documentElement.clientHeight;

    this.setState(() => ({
      height,
    }));
  }, 100);

  componentDidMount() {
    this.calcWindowHeight();
    window.addEventListener('resize', this.calcWindowHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWindowHeight);
  }

  render() {
    const { routes } = this.props;
    const { height } = this.state;

    return (
      <Layout>
        <Sider width={256} style={{ color: '#fff' }}>
          Sider
        </Sider>
        <Layout style={{ minHeight: (height - 1) }}>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div>
              <Switch>
                <Redirect exact from="/" to="/test" />
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
