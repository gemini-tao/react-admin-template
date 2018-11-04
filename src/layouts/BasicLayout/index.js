/* eslint-disable react/sort-comp */
/*
 * @Author: lifan
 * @Date: 2018-10-31 22:18:49
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-04 11:51:30
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import { Switch, Redirect, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import RenderRoutes from '../../components/RenderRoutes';
import styles from './style.module.scss';

const {
  Header, Footer, Sider, Content,
} = Layout;

class BasicLayout extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    isMenuCollapsed: PropTypes.bool.isRequired,
    triggerMenuCollapsed: PropTypes.func.isRequired,
  }

  state = {
    height: 0,
  }

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
    const { routes, isMenuCollapsed, triggerMenuCollapsed } = this.props;
    const { height } = this.state;

    return (
      <Layout>
        <Sider
          width={256}
          style={{ color: '#fff' }}
          trigger={null}
          collapsible
          collapsed={isMenuCollapsed}
        >
          sider
        </Sider>
        <Layout style={{ minHeight: (height - 1) }}>
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

const mapStateToProps = state => ({
  isMenuCollapsed: state.settings.isMenuCollapsed,
});

const mapDispatchToProps = dispatch => ({
  triggerMenuCollapsed: dispatch.settings.triggerMenuCollapsed,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicLayout);
