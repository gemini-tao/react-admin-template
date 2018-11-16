/*
 * @Author: lifan
 * @Date: 2018-11-13 14:47:57
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-16 16:26:43
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
    this.state = {
      openKeys: this.getDefaultOpenKeys(props.location.pathname),
    };
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

  onOpenChangeHandler = (keys) => {
    console.log(keys);
    let key = [];

    if (keys.length === 0) {
      key = [];
    } else {
      const tmp = urlToList(keys.pop());
      if (tmp.length >= 2) {
        key = tmp.slice(0, tmp.length);
      } else {
        key = tmp;
      }
    }

    // console.log(this.state.openKeys);
    // console.log(key);

    this.setState({
      openKeys: key,
    });
  }

  getDefaultOpenKeys(pathname) {
    const selectMenuKeys = this.getSelectedMenuKeys(pathname);
    let oKeys = [];
    if (selectMenuKeys && selectMenuKeys.length >= 1) {
      oKeys = selectMenuKeys.slice(0, selectMenuKeys.length - 1);
    }

    return oKeys;
  }

  onSelectHandler = ({ key }) => {
    const arr = this.getSelectedMenuKeys(key);
    let openKeys = [];
    if (arr.length >= 1) {
      openKeys = arr.slice(0, arr.length - 1);
    }

    this.setState({
      openKeys,
    });
  }

  render() {
    const { menuData, inlineCollapsed, location: { pathname } } = this.props;
    const { openKeys } = this.state;
    const selectMenuKeys = this.getSelectedMenuKeys(pathname);
    const defaultProps = {};

    if (!inlineCollapsed) {
      defaultProps.onOpenChange = this.onOpenChangeHandler;
      defaultProps.openKeys = openKeys;
      defaultProps.onSelect = this.onSelectHandler;
    }

    return (
      <Menu
        mode="inline"
        theme="dark"
        {...defaultProps}
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
