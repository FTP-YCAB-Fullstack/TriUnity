import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const PublicRoute = ({ onlyPublic, ...rest }) => {
  const [cookies] = useCookies(["token"]);
  return onlyPublic && cookies.token ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} />
  );
};

const PrivateRoute = props => {
  const [cookies] = useCookies(["token"]);
  return cookies.token ? <Route {...props} /> : <Redirect to="/" />;
};

export { PublicRoute, PrivateRoute };
