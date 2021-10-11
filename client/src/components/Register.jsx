import React from "react";

const Register = props => {
  return (
    <form
      onSubmit={props.onSubmitRegister}
      className="flex flex-col flex-grow w-full my-10"
    >
      <label className="mx-4 my-2">First Name</label>
      <input
        type="text"
        className="rounded-full mx-4 bg-gray-200 p-2"
        name="firstName"
        placeholder="inset your first name in here..."
      />
      <label className="mx-4 my-2">Last Name</label>
      <input
        type="text"
        className="rounded-full mx-4 bg-gray-200 p-2"
        name="lastName"
        placeholder="inset your last name in here..."
      />
      <label className="mx-4 my-2">Email</label>
      <input
        type="text"
        className="rounded-full mx-4 bg-gray-200 p-2"
        name="email"
        placeholder="insert email in here..."
      />
      <label className="mx-4 my-2">Password</label>
      <input
        type="password"
        className="rounded-full mx-4 bg-gray-200 p-2"
        name="password"
        placeholder="insert password in here..."
      />
      <label></label>
      <button
        className="rounded-full my-8 p-2 mx-auto bg-red-300 w-2/4"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
