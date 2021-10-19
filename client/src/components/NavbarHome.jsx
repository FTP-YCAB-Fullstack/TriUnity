import React, { Fragment, useState, useEffect } from "react";
import AssetLogo from "../assets/logo.png";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

function Navbar(props) {
  const [cookies, , removeCookies] = useCookies(["token"]);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

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

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = !yPos;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      className={
        "w-full fixed top-0 z-50 shadow-md " +
        (shouldShowActions === 0 ? "block" : "hidden")
      }
      animate={{
        opacity: shouldShowActions ? 0 : 1,
        backgroundColor: shouldShowActions ? "transparent" : "red"
      }}
      initial={{ backgroundColor: "transparent" }}
      transition={{ opacity: { duration: 0.2 } }}
    >
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
                        <div className="bg-white flex flex-col w-48 h-36 py-2 shadow-lg rounded-lg">
                          <Menu.Item>
                            <p
                              className="hover:bg-blue-400 cursor-pointer bg-white py-2 px-5"
                              onClick={onClicktoProfile}
                            >
                              Profile
                            </p>
                          </Menu.Item>
                          <Menu.Item>
                            <p
                              className="hover:bg-blue-400 cursor-pointer bg-white py-2 px-5"
                              onClick={onClicktoPhotosForSale}
                            >
                              Photos for sale
                            </p>
                          </Menu.Item>
                          <Menu.Item>
                            <p
                              className="hover:bg-blue-400 cursor-pointer bg-white py-2 px-5"
                              onClick={onClickLogout}
                            >
                              Logout
                            </p>
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
    </motion.div>
  );
}

export default withRouter(Navbar);
