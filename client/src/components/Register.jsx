import React from "react";

const Register = props => {
  return (
    <form onSubmit={props.onSubmitRegister}>
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
  );
};

export default Register;
