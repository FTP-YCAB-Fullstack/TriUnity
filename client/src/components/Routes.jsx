import React from "react";
import { Route } from "react-router-dom";
import { useCookies } from "react-cookie";

const PublicRoute = ({ onlyPublic, ...rest }) => {
  const [cookies] = useCookies(["token"]);
  return onlyPublic && cookies.token ? "Home" : <Route {...rest} />;
};

const PrivateRoute = props => {
  const [cookies] = useCookies(["token"]);
  return cookies.token ? <Route {...props} /> : "Home";
};

export { PublicRoute, PrivateRoute };
