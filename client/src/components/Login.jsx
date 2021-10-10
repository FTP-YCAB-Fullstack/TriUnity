import React from "react";

const Login = props => {
  return (
    <form onSubmit={props.onSubmitLogin}>
      <h2>Login</h2>
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

export default Login;
