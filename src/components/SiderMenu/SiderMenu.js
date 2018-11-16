/*
 * @Author: lifan
 * @Date: 2018-11-05 15:47:55
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-16 14:35:50
 */
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import BaseMenu from './BaseMenu';

const { Sider } = Layout;

export default class SiderMenu extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
    menuData: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    const {
      collapsed, onCollapse, menuData, className, location,
    } = this.props;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={256}
        className={className}
      >
        <div style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16 }} />
        <BaseMenu
          menuData={menuData}
          className={className}
          location={location}
          inlineCollapsed={collapsed}
        />
      </Sider>
    );
  }
}
