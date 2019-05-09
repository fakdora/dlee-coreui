import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';


const PrivateRoute = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.constructor.isAuthenticated() ?
          <Component auth={auth} {...props} /> :
          <Redirect
            to="/login"
          />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  auth: PropTypes.object,
};

export default PrivateRoute;
