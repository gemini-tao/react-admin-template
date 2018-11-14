/*
 * @Author: lifan
 * @Date: 2018-11-13 14:47:57
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-14 11:21:28
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

// const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent {
  static propTypes = {
    menuData: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    inlineCollapsed: PropTypes.bool.isRequired,
  }

  componentDidMount() {

  }

  getNavMenuItems = menuData => (
    menuData.reduce((arr, item) => {
      const { name, icon } = item;
      const menuItem = (
        <Menu.Item key={item.path}>
          <Icon type={icon} />
          <span>{name}</span>
        </Menu.Item>
      );

      arr.push(menuItem);
      return arr;
    }, [])
  )

  render() {
    const { menuData, className, inlineCollapsed } = this.props;

    console.log(menuData);
    return (
      <Menu
        mode="inline"
        theme="dark"
        className={className}
        inlineCollapsed={inlineCollapsed}
      >
        {
          this.getNavMenuItems(menuData)
        }
      </Menu>
    );
  }
}
