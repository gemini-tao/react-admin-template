/* eslint-disable react/sort-comp */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-08 16:07:26
 */
/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import { Switch, Redirect, Route } from 'react-router-dom';
import RouterView from '../../components/RouterView';
import SiderMenu from '../../components/SiderMenu';
import ROUTES from '../../router/routes';
import styles from './style.module.scss';

const {
  Header, Footer, Sider, Content,
} = Layout;

const formatter = (data, parentAuthority, parentName) => (
  data.map(item => item)
);

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class BasicLayout extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    isMenuCollapsed: PropTypes.bool.isRequired,
    triggerMenuCollapsed: PropTypes.func.isRequired,
  }

  getMenuData(data) {
    console.log(formatter(data))
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps, this.props)
    return true;
  }

  componentDidMount() {
    this.getMenuData(ROUTES)
  }

  componentWillUnmount() {

  }

  render() {
    const { routes, isMenuCollapsed, triggerMenuCollapsed } = this.props;

    return (
      <Layout>
        <Sider
          width={256}
          className={styles.sider}
          trigger={null}
          collapsible
          collapsed={isMenuCollapsed}
        >
          <SiderMenu collapsed={!isMenuCollapsed} />
        </Sider>
        <Layout className={styles.content}>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={isMenuCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={triggerMenuCollapsed}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div>
              <Switch>
                <Redirect exact from="/" to="/test" />
                <Route render={() => <RouterView routes={routes} />} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMenuCollapsed: state.settings.isMenuCollapsed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerMenuCollapsed: dispatch.settings.triggerMenuCollapsed,
  };
}

export default BasicLayout;
