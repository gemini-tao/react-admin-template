import React, { Component } from 'react';
import { Button } from 'antd'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary" icon="step-backward">hello</Button>
        {/* <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> */}
      </div>
    );
  }
}

export default App;
