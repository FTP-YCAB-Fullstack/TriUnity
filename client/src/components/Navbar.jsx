import React from 'react'
import AssetLogo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import Keranjang from '../assets/keranjang.png'
import { withRouter } from "react-router-dom";

// function Navbar(props) {
//     const [ cookies ] = useCookies(["token"])
//     return (
//         <nav>
//             <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
//                 <div className="flex flex-row gap-2">
                
//                 {/* <button  className="px-4 text-white">Keranjang</button> */}
//                 {cookies.token ? <button onClick={props.onClickLogout} className="px-4 text-white">Logout</button> : <button onClick={props.onClicktoLogin} className="px-4 text-white">Login</button>}
//                 </div>
//             </div>
//         </nav>
//     )



function Navbar(props) {
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
      pathname: "/"
    });
  };

  const onClickLogout = () => {
    removeCookies("token");
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
          <img src={Keranjang} alt="Masukkan kedalam keranjang" className="cursor-pointer" onClick={onClicktoKeranjang}/>
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
