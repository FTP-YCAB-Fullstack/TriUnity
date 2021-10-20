import React from "react";

const Login = props => {
  return (
    <form
      onSubmit={props.onSubmitLogin}
      className="flex flex-col flex-grow w-full my-10"
    >
      <label className="mx-4 my-2">Email</label>
      <input
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        type="text"
        name="email"
        placeholder="insert email in here..."
      />
      <label className="mx-4 my-2">Password</label>
      <input
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        type="password"
        name="password"
        placeholder="insert password in here..."
      />
      <button
        className="rounded-full my-8 p-2 mx-auto bg-red-600 hover:bg-red-700 hover:shadow-inner text-white font-bold w-2/4"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
