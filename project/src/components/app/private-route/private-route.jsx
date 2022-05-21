import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../../store/user/selectors';

// PrivateRoute - HOC
function PrivateRoute({render, path, exact, redirect, allowedStatus}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === allowedStatus
          ? render(routeProps)
          : <Redirect to={redirect} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  allowedStatus: PropTypes.string.isRequired,
};

export default PrivateRoute;
