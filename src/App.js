/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:44
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-30 16:22:18
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';

const mapState = state => ({
  count: state.count,
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
});

@connect(
  mapState,
  mapDispatch,
)
class App extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
  }

  render() {
    const { a } = this.state;
    const { increment, incrementAsync } = this.props;
    return (
      <div>
        <Button type="primary" icon="step-backward" test={a} onClick={increment}>
          add
        </Button>
        <Button type="primary" icon="step-backward" test={a} onClick={incrementAsync}>
          add async
        </Button>
        {/* <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> */}
      </div>
    );
  }
}

export default App;
