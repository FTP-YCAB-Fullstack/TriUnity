import React, { useState } from "react";
import Sellphotos from "../components/Sellphotos";
import axios from "axios";

export default function SellPhotos(props) {
  const [message, setMessage] = useState("");

  const onClickSell = async event => {
    event.preventDefault();
    const formData = new FormData();
    const image = event.target.image.files[0];
    const title = event.target.title.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    if (image && image.name.trim() !== "" && title.trim() !== "" && price) {
      formData.append("image", image);
      formData.append("filename", image ? image.name : "");
      formData.append("title", title);
      formData.append("price", price);
      if (description.trim !== "") {
        formData.append("description", description);
      }
      const response = await axios
        .post("http://localhost:5000/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          withCredentials: true
        })
        .catch(error => error.response);
      if (response.status === 201) {
        props.history.replace({
          pathname: "/photos-for-sale"
        });
      } else {
        setMessage(response.data.message);
      }
    } else {
      setMessage("Required to fill image, title, and price");
    }
  };
  return (
    <div>
      <Sellphotos onClickSell={onClickSell} message={message} />
    </div>
  );
}
