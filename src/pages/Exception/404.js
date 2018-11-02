/*
 * @Author: lifan
 * @Date: 2018-11-02 16:22:11
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-02 16:28:02
 */
import React from 'react';
import PropTypes from 'prop-types';
import Exception from '../../components/Exception';

const Exception404 = ({ history }) => (
  <Exception
    type={404}
    onClick={() => history.push('/')}
  />
);

Exception404.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Exception404;
