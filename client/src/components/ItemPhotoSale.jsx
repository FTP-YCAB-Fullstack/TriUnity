import React from "react";

const ItemPhotoSale = props => {
  const urlPhoto = "http://localhost:5000/image/";
  return (
    <div>
      <img src={urlPhoto + props.image} alt="Photo" />
      <label>{props.title}</label>
      <label>{props.price}</label>
    </div>
  );
};

export default ItemPhotoSale;
