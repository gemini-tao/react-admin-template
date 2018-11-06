import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
/* eslint-disable */
class Test extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props);
    console.log(nextProps);
    return !is(fromJS(nextProps), fromJS(this.props))
  }

  render() {
    console.log('render');
    return (
      <div>
        test
      </div>
    )
  }
}

export default Test;
