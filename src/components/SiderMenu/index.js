/*
 * @Author: lifan
 * @Date: 2018-11-05 15:47:55
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-14 10:23:40
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
  };

  componentDidMount() {

  }

  render() {
    const {
      collapsed, onCollapse, menuData, className,
    } = this.props;

    console.log(menuData);
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={256}
      >
        <BaseMenu
          menuData={menuData}
          className={className}
          inlineCollapsed={collapsed}
        />
      </Sider>
    );
  }
}
