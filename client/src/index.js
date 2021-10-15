import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import { PublicRoute, PrivateRoute } from "./components/Routes";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import "./tailwind.css";
import store from "./redux/store";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/homepage";
import Keranjang from "./pages/Keranjang";
import SellPhotos from "./pages/SellPhotos";
import DetailPhotos from "./pages/DetailPhotos";

const Main = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute
              onlyPublic={false}
              path="/"
              exact
              component={Homepage}
            />
            <PublicRoute onlyPublic path="/signin" exact component={SignIn} />
            <PublicRoute
              onlyPublic={false}
              path="/detailpage"
              exact
              component={DetailPhotos}
            />
            <PublicRoute
              onlyPublic={false}
              path="/keranjang"
              exact
              component={Keranjang}
            />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/sell" exact component={SellPhotos} />
          </Switch>
        </Router>
      </Provider>
    </CookiesProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
