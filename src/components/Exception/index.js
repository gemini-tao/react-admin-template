/* eslint-disable react/prefer-stateless-function */
/*
 * @Author: lifan
 * @Date: 2018-11-02 10:28:58
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 16:12:40
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import config from './config';
import styles from './style.module.scss';

class Exception extends PureComponent {
  static propTypes = {
    backText: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.number.isRequired,
  }

  static defaultProps = {
    backText: '返回首页',
  }

  render() {
    const { backText, type, onClick } = this.props;
    return (
      <div className={styles.exception}>
        <div className={styles.block}>
          <div className={styles.imgBlock}>
            <div
              className={styles.imgEle}
              style={{ backgroundImage: `url(${config[type].img})` }}
            />
          </div>
          <div className={styles.content}>
            <h1>{config[type].title}</h1>
            <div className={styles.desc}>{config[type].desc}</div>
            <div>
              <Button type="primary" size="large" onClick={onClick}>{backText}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exception;
