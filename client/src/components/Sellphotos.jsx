import React from "react";
import Navbar from "./Navbar";

function Sellphotos(props) {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen p-12 flex justify-center items-center">
        <form
          onSubmit={props.onClickSell}
          className="flex flex-col flex-grow bg-gray-100 w-full rounded-lg shadow-2xl my-10"
        >
        <h1 className="font-bold p-4 flex justify-center text-2xl">Input Information of Photos</h1>
          <input
            className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
            type="text"
            name="title"
            placeholder="insert title in here..."
          />
          <input
            className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
            type="number"
            name="price"
            placeholder="insert price in here..."
          />
          <textarea
            className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
            name="description"
            placeholder="insert description in here..."
          ></textarea>
          <input className="rounded m-4 p-2" type="file" name="image" />
          <button
            className="rounded-full bg-green-400 hover:bg-green-600 my-8 p-2 mx-auto w-2/4"
            type="submit"
          >
            Sell
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sellphotos;
