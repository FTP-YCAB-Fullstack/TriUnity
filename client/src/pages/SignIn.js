import React from "react";
import axios from "axios";
import Login from "../components/Login";
import Register from "../components/Register";
import { useCookies } from "react-cookie";

const SignIn = () => {
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmitLogin = async event => {
    event.preventDefault();
    const response = await axios
      .post(
        "http://localhost:5000/users/login",
        {
          email: event.target.email.value,
          password: event.target.password.value
        },
        { withCredentials: true }
      )
      .catch(error => error.response);
    if (response && response.status === 200) {
      console.log(response.data);
      setCookies("token", response.data.token, { path: "/" });
    } else {
      console.error(response);
    }
  };

  const onSubmitRegister = async event => {
    event.preventDefault();
    const response = await axios
      .post(
        "http://localhost:5000/users/register",
        {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          password: event.target.password.value
        },
        { withCredentials: true }
      )
      .catch(error => error.response);
    if (response && response.status === 201) {
      console.log(response.data);
      setCookies("token", response.data.token, { path: "/" });
    } else {
      console.error(response);
    }
  };

  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} />
      <Register onSubmitRegister={onSubmitRegister} />
    </>
  );
};

export default SignIn;
