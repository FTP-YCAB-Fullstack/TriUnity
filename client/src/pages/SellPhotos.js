import React from "react";
import Sellphotos from "../components/Sellphotos";
import axios from "axios";

export default function SellPhotos(props) {
  const onClickSell = async event => {
    event.preventDefault();
    const formData = new FormData();
    const image = event.target.image;
    formData.append("image", image.files[0]);
    formData.append("filename", image.files[0].name);
    formData.append("title", event.target.title.value);
    formData.append("price", event.target.price.value);
    formData.append("description", event.target.description.innerHTML);
    const response = await axios
      .post("http://localhost:5000/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      })
      .catch(error => error.response);
    console.log(response);
  };
  return (
    <div>
      <Sellphotos onClickSell={onClickSell} />
    </div>
  );
}
