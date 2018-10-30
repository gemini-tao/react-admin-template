import React, { Component } from 'react';
import { Button } from 'antd';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
  }

  render() {
    const { a } = this.state;
    return (
      <div>
        <Button type="primary" icon="step-backward" test={a}>
          hello
        </Button>
        {/* <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> */}
      </div>
    );
  }
}

export default App;
