import React from "react";
import background from "../assets/background2.jpg";
import blend1 from "../assets/blend.jpg"
import blend2 from "../assets/blend2.jpg"
import blend3 from "../assets/blend3.png"

function Header(props) {
  return (
    <header>
        <div className="w-full h-screen flex flex-col justify-center items-center relative">
          <div className="h-full w-full flex justify-center items-center overflow-hidden" style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: '1920px 1080px', filter: 'brightness(50%)'}}>
            {/* <img className="flex filter brightness-50" alt="background" src={background}/> */}
            <div className="h-full"></div>
          </div>
          <div className="absolute w-full h-full flex items-center flex-col justify-center">
            <h1 className="text-4xl text-center w-2/5 font-black text-white">
              Sell ​​photos without worrying about plagiarism
            </h1>
            <form
              className="flex bg-white rounded-full w-1/2 justify-between my-10"
              onSubmit={props.onSubmitSearch}
            >
              <input
                type="text"
                name="search"
                className="rounded-l-full focus:outline-none px-5 w-full"
                placeholder="Search Photo here..."
                />
              <input
                type="submit"
                className="rounded-full py-2 px-7 hover:bg-gray-300 cursor-pointer"
                value="Search"
              />
            </form>
            <button
              onClick={props.onClicktoSellPhotos}
              className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-800 text-white"
              >
              Sell your Photos
            </button>
          </div>
        </div>
    </header>
  );
}

export default Header;
