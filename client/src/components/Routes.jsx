import React from "react";
import { Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Homepage from "../pages/Homepage";

const PublicRoute = ({ onlyPublic, ...rest }) => {
  const [cookies] = useCookies(["token"]);
  return onlyPublic && cookies.token ? <Homepage /> : <Route {...rest} />;
};

const PrivateRoute = props => {
  const [cookies] = useCookies(["token"]);
  return cookies.token ? <Route {...props} /> : <Homepage />;
};

export { PublicRoute, PrivateRoute };
