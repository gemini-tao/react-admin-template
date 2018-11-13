/*
 * @Author: lifan
 * @Date: 2018-11-13 14:47:57
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-13 16:40:34
 */
/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent {
  static propTypes = {
    menuData: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
  }

  componentDidMount() {

  }

  getNavMenuItems = menuData => (
    menuData.reduce((arr, item) => {
      const { name, icon } = item;
      const menuItem = (
        <SubMenu
          key={item.path}
          title={
            !icon ? name : (
              <span>
                <Icon type={icon} />
                <span>{name}</span>
              </span>
            )
          }
        >
          {
            this.getNavMenuItems(item.children)
          }
        </SubMenu>
      );

      arr.push(menuItem);
      return arr;
    }, [])
  )

  render() {
    const { menuData, className, inlineCollapsed } = this.props;
    return (
      <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span>
<Icon type="mail" />
<span>Navigation One</span>
</span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>
<Icon type="appstore" />
<span>Navigation Two</span>
</span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    );
  }
}
