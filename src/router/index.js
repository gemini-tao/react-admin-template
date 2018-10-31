import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import history from './history';
import routes from './routes';

const RootRouter = () => (
  <ConnectedRouter history={history}>
    <div>
      {
        routes.map(route => <Route key={route.path} path={route.path} render={() => (<route.component />)} />)
      }
      <Route exact path="/test" render={() => (<div>test</div>)} />
      <Route render={() => (<div>Mis1s</div>)} />
    </div>
  </ConnectedRouter>
);

export default RootRouter;
