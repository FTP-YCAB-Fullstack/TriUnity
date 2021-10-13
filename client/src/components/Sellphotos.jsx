import React from "react";
import Navbar from "./Navbar";

function Sellphotos(props) {
  return (
    <div>
      <Navbar />
      <form onSubmit={props.onClickSell}>
        <input type="text" name="title" placeholder="insert title in here..." />
        <input
          type="number"
          name="price"
          placeholder="insert price in here..."
        />
        <textarea
          name="description"
          placeholder="insert description in here..."
        ></textarea>
        <input type="file" name="image" />
        <button
          type="submit"
          className="bg-red-600 px-5 py-2 rounded-full text-white"
        >
          Sell
        </button>
      </form>
    </div>
  );
}

export default Sellphotos;
