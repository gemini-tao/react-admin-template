import React, { Component } from 'react';
import RouterView from '../../components/RouterView';
/* eslint-disable */
class Test extends Component {

  render() {
    console.log('render');
    return (
      <div>
        test
        <RouterView routes={this.props.routes} flag />
      </div>
    )
  }
}

export default Test;
