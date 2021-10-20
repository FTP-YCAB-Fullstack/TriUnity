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
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        name="firstName"
        placeholder="insert your first name in here..."
      />
      <label className="mx-4 my-2">Last Name</label>
      <input
        type="text"
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        name="lastName"
        placeholder="insert your last name in here..."
      />
      <label className="mx-4 my-2">Email</label>
      <input
        type="text"
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        name="email"
        placeholder="insert email in here..."
      />
      <label className="mx-4 my-2">Password</label>
      <input
        type="password"
        className="rounded-full mx-4 bg-gray-200 py-2 px-4"
        name="password"
        placeholder="insert password in here..."
      />
      <button
        className="rounded-full my-8 p-2 mx-auto bg-red-600 hover:bg-red-700 hover:shadow-inner text-white font-bold w-2/4"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
