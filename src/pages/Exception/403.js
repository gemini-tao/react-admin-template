/*
 * @Author: lifan
 * @Date: 2018-11-02 16:22:08
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 16:27:58
 */
import React from 'react';
import PropTypes from 'prop-types';
import Exception from '../../components/Exception';

const Exception403 = ({ history }) => (
  <Exception
    type={403}
    onClick={() => history.push('/')}
  />
);

Exception403.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Exception403;
