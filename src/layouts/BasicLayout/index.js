/* eslint-disable react/sort-comp */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-13 16:14:57
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

const formatter = (data, role) => (
  data.reduce((arr,item) => {
    if (!item.path || !item.name) {
      return arr;
    }

    if (item.authority && item.authority.indexOf(role) === -1 || item.hideInMenu) {
      return arr;
    }

    const result = {
      ...item,
    }

    if (item.routes && item.routes.length !== 0) {
      const children = formatter(item.routes, role);

      result.children = children;
    }

    // const result = {
    //   ...item,
    //   authority: item.authority || parentAuthority,
    // };

    // if (item.routes && item.routes.length !== 0) {
    //   const children = formatter(item.routes, item.authority);
    //   result.children = children;
    // }

    delete result.routes;
    delete result.component;

    arr.push(result);

    return arr
  }, [])
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

  state = {
    menuData: formatter(ROUTES[1].routes, this.props.role),
    isMobile: false,
  }

  getMenuData(data) {
    console.log(formatter(data))
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps, this.props)
    return true;
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
          isMobile ? null :
            <SiderMenu
              className={styles.sider}
              onCollapse={triggerMenuCollapsed}
              collapsed={isMenuCollapsed}
              menuData={menuData} />
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
    role: state.user.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerMenuCollapsed: dispatch.settings.triggerMenuCollapsed,
  };
}

export default BasicLayout;
