/* eslint-disable */
import React, { Component } from 'react';
import RouterView from '../../components/RouterView';

class Demo extends Component {

  render() {
    console.log('render');
    return (
      <div>
        demo
        <RouterView routes={this.props.routes} />
      </div>
    )
  }
}

export default Demo;
