/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:44
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-31 22:18:27
 */
/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import history from './router/history';
import { getSelector } from './store';
import BasicLayout from './layouts/BasicLayout';

const mapState = state => ({
  count: state.count,
  loading: state.loading.effects.count.incrementAsync,
  total: getSelector('cart', 'total'),
});

const mapDispatch = dispatch => ({
  goTo: () => dispatch.count.goTo(),
  add: () => dispatch.cart.add(),
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
    add: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
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
    const { asyncIncrement, add } = this.props;
    asyncIncrement();
    add();
  }

  render() {
    return (
      <BasicLayout />
    );

    // return (
    //   <div>
    //     <div>
    //       <Button type="primary" onClick={this.goTo}>go</Button>
    //       <Button type="primary" onClick={this.add} loading={loading}>add</Button>
    //     </div>
    //     <h1>{total}</h1>
    //     <ConnectedRouter history={history}>
    //       <div a={a}>
    //         <Switch>
    //           <Route exact path="/" render={() => (<div>Match</div>)} />
    //           <Route exact path="/test" render={() => (<div>test</div>)} />
    //           <Route render={() => (<div>Mis1s</div>)} />
    //         </Switch>
    //       </div>
    //     </ConnectedRouter>
    //   </div>
    // );
  }
}

export default App;
