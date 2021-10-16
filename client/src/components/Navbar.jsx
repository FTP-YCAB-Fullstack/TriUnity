import React from "react";
import AssetLogo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  const [cookies, , removeCookies] = useCookies(["token"]);

  const onClicktoLogin = () => {
    props.history.push({
      pathname: "/signin"
    });
  };

  const onClicktoHome = () => {
    props.history.push({
      pathname: "/"
    });
  };

  const onClickLogout = () => {
    removeCookies("token");
  };

  const onClicktoPhotosForSale = () => {
    props.history.push({
      pathname: "/photos-for-sale"
    });
  };

  return (
    <nav>
      <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
        <img
          className="cursor-pointer"
          src={AssetLogo}
          alt="logo"
          onClick={onClicktoHome}
        />
        <div className="flex flex-row gap-2">
          {cookies.token ? (
            <button
              className="px-4 text-white"
              onClick={onClicktoPhotosForSale}
            >
              photos for sale
            </button>
          ) : null}
          {cookies.token ? (
            <button onClick={onClickLogout} className="px-4 text-white">
              Logout
            </button>
          ) : (
            <button onClick={onClicktoLogin} className="px-4 text-white">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
