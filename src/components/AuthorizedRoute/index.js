import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Authorized from './Authorized';

const AuthorizedRoute = ({
  component: Component,
  render,
  authority,
  redirectPath,
  role,
  ...rest
}) => (
  <Authorized
    authority={authority}
    role={role}
    noMatch={(
      <Route
        {...rest}
        render={() => <Redirect to="/exception/403" />
      }
      />
    )}
  >
    <Route
      {...rest}
      render={props => (
        Component ? <Component {...props} />
          : render(props)
      )}
    />
  </Authorized>
);

export default connect(
  state => ({
    role: state.user.role,
  }),
)(AuthorizedRoute);
