import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./components/Routes";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import './tailwind.css'
import store from "./redux/store";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import Keranjang from "./pages/Keranjang";
import SellPhotos from "./pages/SellPhotos";
import DetailPhotos from "./pages/DetailPhotos";

const Main = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute onlyPublic path="/signin" exact component={SignIn} />
            <PublicRoute onlyPublic path="/home" exact component={Homepage} />
            <PublicRoute onlyPublic path="/keranjang" exact component={Keranjang}/>
            <PublicRoute onlyPublic path="/sell" exact component={SellPhotos}/>
            <PublicRoute onlyPublic path="/detailpage" exact component={DetailPhotos}/>
          </Switch>
        </Router>
      </Provider>
    </CookiesProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
