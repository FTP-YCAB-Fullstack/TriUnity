import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ onlyPublic, ...rest }) =>
  !onlyPublic ? "Home" : <Route {...rest} />;

export { PublicRoute };
