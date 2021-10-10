import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./components/Routes";
import { CookiesProvider } from "react-cookie";
import SignIn from "./pages/SignIn";

const Main = () => {
  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <PublicRoute onlyPublic path="/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
