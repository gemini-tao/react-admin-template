/* eslint-disable react/sort-comp */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-16 16:35:14
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
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
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      menuData: formatter(ROUTES[ROUTES.length - 1].routes, props.role),
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen((mobile) => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  render() {
    const {
      routes, isMenuCollapsed, triggerMenuCollapsed, location,
    } = this.props;
    const { menuData, isMobile } = this.state;
    return (
      <Layout>
        <SiderMenu
          className={styles.sider}
          onCollapse={triggerMenuCollapsed}
          collapsed={isMenuCollapsed}
          location={location}
          isMobile={isMobile}
          menuData={menuData}
        />
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
  location: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  triggerMenuCollapsed: dispatch.settings.triggerMenuCollapsed,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicLayout);
