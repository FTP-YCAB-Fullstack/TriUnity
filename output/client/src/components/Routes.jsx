import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import {useLocation} from "react-router-dom"

const PublicRoute = ({ onlyPublic, ...rest }) => {
  const [cookies] = useCookies(["token"]);
  return onlyPublic && cookies.token ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} />
  );
};

const PrivateRoute = props => {
  const location = useLocation()
  const [cookies] = useCookies(["token"]);
  return cookies.token ? <Route {...props} /> : <Redirect to={
    {
      pathname: "/signin",
      state: {
        redirect: location.pathname
      }
    }
  } />;
};

export { PublicRoute, PrivateRoute };
