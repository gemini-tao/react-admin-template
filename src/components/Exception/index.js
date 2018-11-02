/* eslint-disable react/prefer-stateless-function */
/*
 * @Author: lifan
 * @Date: 2018-11-02 10:28:58
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 11:37:16
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import config from './config';
import styles from './style.module.scss';

class Exception extends PureComponent {
  static propTypes = {
    backText: PropTypes.string,
    redirect: PropTypes.string,
    type: PropTypes.number,
  }

  static defaultProps = {
    backText: '返回首页',
    redirect: '/',
    type: 403,
  }

  render() {
    const { backText, type, redirect } = this.props;
    return (
      <div className={styles.exception}>
        <div className={styles.imgBlock}>
          <div
            className={styles.imgEle}
            style={{ backgroundImage: `url(${config[type].img})` }}
          />
        </div>
        {backText}
        {type}
        {redirect}
      </div>
    );
  }
}

export default Exception;
