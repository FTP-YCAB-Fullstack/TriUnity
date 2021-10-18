import React from "react";
import Navbar from "./Navbar";

function Sellphotos(props) {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen p-12 flex justify-center items-center">
          <form
            onSubmit={props.onClickSell}
            className="flex flex-col flex-grow w-full my-10"
          >
            <input
              className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
              type="text"
              name="title"
              placeholder="insert title in here..."
            />
            <input
              className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2 disabled:opacity-30"
              type="number"
              name="price"
              disabled={props.checkedFree}
              min="1000"
              step="1000"
              placeholder="insert price in here..."
            />
            <div>
              <input
                className="m-4 p-2"
                type="checkbox"
                checked={props.checkedFree}
                onChange={() => props.setCheckedFree(!props.checkedFree)}
              />
              Free
            </div>
            <textarea
              className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
              name="description"
              placeholder="insert description in here..."
            ></textarea>
            <input className="rounded m-4 p-2" type="file" name="image" />
            <label className="mx-4 my-2 text-red-500 text-center">
              {props.message}
            </label>
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
