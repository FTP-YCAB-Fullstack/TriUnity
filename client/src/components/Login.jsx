import React from "react";

const Login = props => {
  return (
    <form
      onSubmit={props.onSubmitLogin}
      className="flex flex-col flex-grow w-full my-10"
    >
      <label className="mx-4 my-2">Email</label>
      <input
        className="rounded-full mx-4 bg-gray-200 p-2"
        type="text"
        name="email"
        placeholder="insert email in here..."
      />
      <label className="mx-4 my-2">Password</label>
      <input
        className="rounded-full mx-4 bg-gray-200 p-2"
        type="password"
        name="password"
        placeholder="insert password in here..."
      />
      <label className="mx-4 my-2 text-red-500 text-center">
        {props.message}
      </label>
      <button
        className="rounded-full my-8 p-2 mx-auto bg-red-300 w-2/4"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
