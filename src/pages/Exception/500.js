/*
 * @Author: lifan
 * @Date: 2018-11-02 16:22:14
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 16:28:06
 */
import React from 'react';
import PropTypes from 'prop-types';
import Exception from '../../components/Exception';

const Exception500 = ({ history }) => (
  <Exception
    type={500}
    onClick={() => history.push('/')}
  />
);

Exception500.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Exception500;
