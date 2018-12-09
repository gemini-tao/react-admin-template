/* eslint-disable */
import React, { Component } from 'react';
import RouterView from '../../components/RouterView';
import './style.less';

class Test extends Component {

  render() {
    console.log('render');
    return (
      <div className="aaa">
        demo119
        {/* <RouterView routes={this.props.routes} /> */}
      </div>
    )
  }
}

export default Test;
