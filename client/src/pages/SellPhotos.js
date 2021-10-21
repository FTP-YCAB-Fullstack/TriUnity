import React, { useState, Component } from "react";
import Sellphotos from "../components/Sellphotos";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import Loading from "../components/Loading";

export default function SellPhotos(props) {
  const [checkedFree, setCheckedFree] = useState(false);
  const [files, setFiles] = useState([]);
  const [cookies] = useCookies(["token"]);
  const [isLoading, setLoading] = useState(false);

  const onClickSell = async event => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData();
    const image = files[0].file;
    const title = event.target.title.value;
    let price;
    if (!checkedFree) {
      price = event.target.price.value;
    }
    const description = event.target.description.value;
    if (
      image &&
      image.name.trim() !== "" &&
      title.trim() !== "" &&
      (price || checkedFree)
    ) {
      formData.append("image", image);
      formData.append("filename", image ? image.name : "");
      formData.append("title", title);
      if (!checkedFree) {
        formData.append("price", price);
      }
      if (description.trim !== "") {
        formData.append("description", description);
      }
      const response = await axios
        .post("https://fierce-headland-22833.herokuapp.com/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: cookies.token
          }
        })
        .catch(error => error.response);
      setLoading(false);
      if (response && response.status === 201) {
        props.history.replace({
          pathname: "/photos-for-sale"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response || "Internal Server Error"
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Required to fill image ${
          checkedFree ? "and title" : ", title"
        } ${checkedFree ? "" : ", and price"}`
      });
    }
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Sellphotos
        onClickSell={onClickSell}
        checkedFree={checkedFree}
        setCheckedFree={setCheckedFree}
        setFiles={setFiles}
        files={files}
      />
    </div>
  );
}
