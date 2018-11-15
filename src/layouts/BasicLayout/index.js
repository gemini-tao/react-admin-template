/* eslint-disable react/sort-comp */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-15 13:57:04
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import RouterView from '../../components/RouterView';
import SiderMenu from '../../components/SiderMenu';
import ROUTES from '../../router/routes';
import styles from './style.module.scss';

const {
  Header, Footer, Content,
} = Layout;

const formatter = (data, role) => (
  data.reduce((arr, item) => {
    if (!item.path || !item.name) {
      return arr;
    }

    if ((item.authority && item.authority.indexOf(role) === -1) || item.hideInMenu) {
      return arr;
    }

    const result = {
      ...item,
    };

    if (item.routes && item.routes.length !== 0) {
      const children = formatter(item.routes, role);

      result.children = children;
    }

    delete result.routes;
    delete result.component;

    arr.push(result);

    return arr;
  }, [])
);

class BasicLayout extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    isMenuCollapsed: PropTypes.bool.isRequired,
    triggerMenuCollapsed: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
  }

  state = {
    menuData: formatter(ROUTES[ROUTES.length - 1].routes, this.props.role), // eslint-disable-line
    isMobile: false,
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { routes, isMenuCollapsed, triggerMenuCollapsed } = this.props;
    const { menuData, isMobile } = this.state;
    return (
      <Layout>
        {
          isMobile ? null : (
            <SiderMenu
              className={styles.sider}
              onCollapse={triggerMenuCollapsed}
              collapsed={isMenuCollapsed}
              menuData={menuData}
            />
          )
        }
        <Layout className={styles.content}>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={isMenuCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={triggerMenuCollapsed}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <RouterView routes={routes} isMain />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isMenuCollapsed: state.settings.isMenuCollapsed,
  role: state.user.role,
});

const mapDispatchToProps = dispatch => ({
  triggerMenuCollapsed: dispatch.settings.triggerMenuCollapsed,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicLayout);
