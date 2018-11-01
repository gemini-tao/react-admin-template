/*
 * @Author: lifan
 * @Date: 2018-11-01 13:43:06
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 13:46:46
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMsg: error.toString() };
  }

  // componentDidCatch(error, info) {
  //   // You can also log the error to an error reporting service
  //   console.log(error, info);
  // }

  render() {
    const { hasError, errorMsg } = this.state;

    if (hasError) {
      return <h1>{errorMsg}</h1>;
    }

    const { children } = this.props;

    return children;
  }
}

export default ErrorBoundary;
