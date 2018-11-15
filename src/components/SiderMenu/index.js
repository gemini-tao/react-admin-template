/*
 * @Author: lifan
 * @Date: 2018-11-05 15:47:55
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-15 21:05:17
 */
import React, { PureComponent } from 'react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import SiderMenu from './SiderMenu';

const getFlatMenuKeys = (menuData) => {
  let keys = [];
  menuData.forEach((item) => {
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
    keys.push(item.path);
  });
  return keys;
};

export default class SiderMenuWrapper extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
    menuData: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    isMobile: PropTypes.bool,
  };

  static defaultProps = {
    isMobile: false,
  };

  componentDidMount() {
    console.log(getFlatMenuKeys(this.props.menuData)); // eslint-disable-line
  }

  render() {
    const {
      collapsed, onCollapse, isMobile,
    } = this.props;

    return isMobile ? (
      <Drawer
        visible={collapsed}
        placement="left"
        closable={false}
        onClose={() => onCollapse(true)}
        style={{
          padding: 0,
          height: '100vh',
        }}
      >
        <SiderMenu
          {...this.props}
          collapsed={isMobile ? false : collapsed}
        />
      </Drawer>
    ) : (
      <SiderMenu {...this.props} />
    );
  }
}
