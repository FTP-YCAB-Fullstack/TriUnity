import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./components/Routes";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";

const Main = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute onlyPublic path="/signin" exact component={SignIn} />
        <PublicRoute onlyPublic path="/home" exact component={Homepage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
