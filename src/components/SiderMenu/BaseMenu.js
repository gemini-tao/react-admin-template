/*
 * @Author: lifan
 * @Date: 2018-11-13 14:47:57
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-14 14:41:36
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent {
  static propTypes = {
    menuData: PropTypes.array.isRequired,
    inlineCollapsed: PropTypes.bool.isRequired,
  }

  componentDidMount() {

  }

  getNavMenuItems = menuData => (
    menuData.reduce((arr, item) => {
      const { name, icon, children } = item;
      let menuItem = null;

      if (children && children.length > 0) {
        menuItem = (
          <SubMenu
            key={item.path}
            title={(
              <span>
                {
                  icon ? <Icon type={icon} /> : null
                }
                <span>{name}</span>
              </span>
            )
            }
          >
            {
              this.getNavMenuItems(children)
            }
          </SubMenu>
        );
      } else {
        menuItem = (
          <Menu.Item key={item.path}>
            {
              icon ? <Icon type={icon} /> : null
            }
            <span>{name}</span>
          </Menu.Item>
        );
      }

      arr.push(menuItem);
      return arr;
    }, [])
  )

  render() {
    const { menuData, inlineCollapsed } = this.props;

    console.log(menuData);
    return (
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={inlineCollapsed}
      >
        {
          this.getNavMenuItems(menuData)
        }
      </Menu>
    );
  }
}
