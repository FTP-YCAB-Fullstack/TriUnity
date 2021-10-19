import React, { Fragment } from "react";

function RandomPhotos(props) {
  if (props.url) {
    return (
      <div
        onClick={() => props.onClicktoDetailPhotos(props.id)}
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
      >
        <img
          src={props.url}
          alt="photos"
          className="rounded-2xl pointer-events-none"
        />
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default RandomPhotos;
