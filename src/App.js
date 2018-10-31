/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:44
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-31 11:01:35
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import history from './router/history';

const mapState = state => ({
  count: state.count,
  // loading: state.
});

const mapDispatch = dispatch => ({
  goTo: () => dispatch.count.goTo(),
  asyncIncrement: () => dispatch.count.incrementAsync(),
});

@connect(
  mapState,
  mapDispatch,
)
class App extends Component {
  static propTypes = {
    goTo: PropTypes.func.isRequired,
    asyncIncrement: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
  }

  goTo = () => {
    const { goTo } = this.props;
    goTo();
  }

  add = () => {
    const { asyncIncrement } = this.props;
    asyncIncrement();
  }

  render() {
    const { a } = this.state;
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.goTo}>go</Button>
          <Button type="primary" onClick={this.add}>add</Button>
        </div>
        <ConnectedRouter history={history}>
          <div a={a}>
            <Switch>
              <Route exact path="/" render={() => (<div>Match</div>)} />
              <Route exact path="/test" render={() => (<div>test</div>)} />
              <Route render={() => (<div>Miss</div>)} />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

export default App;
