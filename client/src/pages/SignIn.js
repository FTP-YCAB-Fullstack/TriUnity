import React from "react";
import Login from "../components/Login";
import axios from "axios";

const SignIn = () => {
  const onSubmitLogin = async event => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:5000/users/login", {
      email: event.target.email.value,
      password: event.target.password.value
    });
    console.log(data);
  };

  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} />
      <form>
        <h2>Register</h2>
        <input
          type="text"
          name="firstName"
          placeholder="inset your first name in here..."
        />
        <input
          type="text"
          name="lastName"
          placeholder="inset your last name in here..."
        />
        <input type="text" name="email" placeholder="insert email in here..." />
        <input
          type="password"
          name="password"
          placeholder="insert password in here..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignIn;
