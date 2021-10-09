import React from "react";
import axios from "axios";
import Login from "../components/Login";
import Register from "../components/Register";

const SignIn = () => {
  
  const onSubmitLogin = async event => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:5000/users/login", {
      email: event.target.email.value,
      password: event.target.password.value
    });
    console.log(data);
  };

  const onSubmitRegister = async event => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:5000/users/register", {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value
    });
    console.log(data);
  };

  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} />
      <Register onSubmitRegister={onSubmitRegister} />
    </>
  );
};

export default SignIn;
