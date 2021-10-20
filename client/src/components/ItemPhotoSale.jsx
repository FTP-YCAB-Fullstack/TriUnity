import React from "react";

const ItemPhotoSale = props => {
  const urlPhoto = "http://localhost:5000/image/";
  return (
    <div>
      <div className="flex h-52 bg-red-200 rounded-xl m-4 p-4 px-6 shadow-lg">
      <img
        className="max-w-xs rounded-lg"
        src={urlPhoto + props.image}
        alt="for sale"
      />
      <div className="flex-grow text-center flex flex-col justify-center">
        <p className="font-bold text-xl mt-1.5 mb-4">{props.title}</p>
        <p className="text-lg my-1.5">
          {props.price ? "Rp. " + props.price : "Free"}
        </p>
        <p className="text-lg my-1.5">Description</p>
        <p>{props.description}</p>
      </div>
      <div>
        <i
          onClick={() => props.onClickDeleteSalePhoto(props.image)}
          className="fa fa-trash fa-lg cursor-pointer hover:text-red-600"
        ></i>
      </div>
    </div>
    </div>
  );
};

export default ItemPhotoSale;
