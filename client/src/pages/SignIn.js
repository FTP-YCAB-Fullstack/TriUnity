import React, { useState } from "react";
import axios from "axios";
import Login from "../components/Login";
import Register from "../components/Register";
import { useCookies } from "react-cookie";
import assetSignIn from "../assets/SignIn.jpeg";
import Swal from "sweetalert2";

const SignIn = props => {
  const [, setCookies] = useCookies(["token"]);
  const [label, setLabel] = useState("Login");

  const onSubmitLogin = async event => {
    event.preventDefault();
    const response = await axios
      .post("https://fierce-headland-22833.herokuapp.com/users/login", {
        email: event.target.email.value,
        password: event.target.password.value
      })
      .catch(error => error.response);
    if (response && response.status === 200) {
      setCookies("token", response.data.token, { path: "/" });
      if (props.location.state) {
        props.history.push({
          pathname: props.location.state.redirect
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: response.data.message
      });
    }
  };

  const onSubmitRegister = async event => {
    event.preventDefault();
    const response = await axios
      .post("https://fierce-headland-22833.herokuapp.com/users/register", {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value
      })
      .catch(error => error.response);
    if (response && response.status === 201) {
      setCookies("token", response.data.token, { path: "/" });
      if (props.location.state) {
        props.history.push({
          pathname: props.location.state.redirect
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: response.data.message
      });
    }
  };

  return (
    <div className="flex h-full w-full md:h-screen md:w-screen my-6 justify-center items-center">
      <div className="flex w-3/4 my-8 justify-center items-center flex-col overflow-hidden md:flex-row rounded-2xl shadow-2xl">
        <div className="bg-red-600 h-full md:rounded-l-2xl w-full md:w-1/2">
          <img className="w-full" src={assetSignIn} alt="SignIn" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 p-4">
          <ol className="flex justify-center list-none w-full my-4">
            <li
              className="cursor-pointer p-4 w-2/5 text-center hover:shadow-inner text-white font-bold rounded-l-full"
              style={{
                backgroundColor:
                  label === "Login" ? "rgba(255,0,0)" : "rgba(178,34,34)"
              }}
              onClick={event => setLabel(event.target.innerHTML)}
            >
              Login
            </li>
            <li
              className="cursor-pointer p-4 w-2/5 hover:shadow-inner text-center text-white font-bold rounded-r-full"
              style={{
                backgroundColor:
                  label === "Register" ? "rgba(255,0,0)" : "rgba(178,34,34)"
              }}
              onClick={event => setLabel(event.target.innerHTML)}
            >
              Register
            </li>
          </ol>
          {label === "Login" ? (
            <Login onSubmitLogin={onSubmitLogin} />
          ) : (
            <Register onSubmitRegister={onSubmitRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
