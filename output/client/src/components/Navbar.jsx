import React, { Fragment } from "react";
import AssetLogo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

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

  const onClicktoProfile = () => {
    props.history.push({
      pathname: "/profile"
    });
  };

  return (
    <nav class="w-full fixed top-0 z-50 shadow-md">
      <div className="flex justify-between md:gap-5 py-3 px-4 md:px-8 items-center bg-red-600">
        <img
          className="cursor-pointer w-32"
          src={AssetLogo}
          alt="logo"
          onClick={onClicktoHome}
        />
        <div className="flex flex-row items-center gap-8">
          {cookies.token ? (
            <div className="relative">
              <Menu>
                {({ open }) => (
                  <Fragment>
                    <Menu.Button className="text-white">Profile</Menu.Button>
                    <Transition
                      show={open}
                      enter="transform transition duration-100 ease-in"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transform transition duration-75 ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute h-7 flex justify-end py-4 right-0">
                        <div className="bg-white flex flex-col w-48 h-52 py-2 shadow-lg rounded-lg">
                          <Menu.Item>
                            <a className="hover:bg-blue-400 cursor-pointer bg-white py-3 px-5" onClick={onClicktoHome}>Home</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="hover:bg-blue-400 cursor-pointer bg-white py-3 px-5" onClick={onClicktoProfile}>Profile</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="hover:bg-blue-400 cursor-pointer bg-white py-3 px-5" onClick={onClicktoPhotosForSale}>Photos for sale</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="hover:bg-blue-400 cursor-pointer bg-white py-3 px-5" onClick={onClickLogout}>Logout</a>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Fragment>
                )}
              </Menu>
            </div>
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
