import React from "react";
import AssetLogo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";

function Navbar(props) {

    return (
        <nav>
            <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
                <img src={AssetLogo} alt="logo" onClick={props.onClicktoHome}/>
                <div >
                <button onClick={props.onClicktoKeranjang} className="px-4 text-white">Keranjang</button>
                <button onClick={props.onClicktoLogin} className="px-4 text-white">Login</button>
                <button onClick="class=far fa-user" className="px-4 text-white">Profile</button>
                </div>
            </div>
        </nav>
    )
  const [cookies, , removeCookies] = useCookies(["token"]);

  const onClicktoLogin = () => {
    props.history.push({
      pathname: "/signin"
    });
  };

  const onClicktoKeranjang = () => {
    props.history.push({
      pathname: "/keranjang"
    });
  };

  const onClicktoHome = () => {
    props.history.push({
      pathname: "/home"
    });
  };

  const onClickLogout = () => {
    removeCookies("token");
  };

  return (
    <nav>
      <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
        <img src={AssetLogo} alt="logo" onClick={onClicktoHome} />
        <div>
          <button onClick={onClicktoKeranjang} className="px-4 text-white">
            Keranjang
          </button>
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
