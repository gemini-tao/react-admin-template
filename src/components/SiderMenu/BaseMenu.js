/*
 * @Author: lifan
 * @Date: 2018-11-13 14:47:57
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-16 11:35:21
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import memoizeOne from 'memoize-one';
import isEqual from 'lodash.isequal';
import { Menu, Icon } from 'antd';
import { getFlatMenuKeys, urlToList, getMenuMatches } from '../../utils/routerMenu';

const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent {
  static propTypes = {
    menuData: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    inlineCollapsed: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.flatMenuKeys = getFlatMenuKeys(props.menuData);
  }

  getSelectedMenuKeys = memoizeOne(pathname => (
    urlToList(pathname).map(itemPath => getMenuMatches(this.flatMenuKeys, itemPath).pop())
  ), isEqual)

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
            <Link to={item.path}>
              {
                icon ? <Icon type={icon} /> : null
              }
              <span>{name}</span>
            </Link>
          </Menu.Item>
        );
      }

      arr.push(menuItem);
      return arr;
    }, [])
  )

  render() {
    const { menuData, inlineCollapsed, location: { pathname } } = this.props;
    const selectMenuKeys = this.getSelectedMenuKeys(pathname);

    // let menuProps = {};

    // if (!selectMenuKeys || selectMenuKeys.length === 0) {
    //   menuProps.selectedKeys = ['/gis'];
    // } else {

    // }

    return (
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={selectMenuKeys}
        inlineCollapsed={inlineCollapsed}
      >
        {
          this.getNavMenuItems(menuData)
        }
      </Menu>
    );
  }
}
