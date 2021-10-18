import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ItemPhotoSale from "../components/ItemPhotoSale";
import axios from "axios";
import Swal from "sweetalert2"

const PhotosForSale = () => {
  const [photos, setPhotos] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const getPhotos = async () => {
    const response = await axios
      .get("http://localhost:5000/image/for-sale", { withCredentials: true })
      .catch(error => error.response);
    if (response && response.status === 200) {
      setPhotos(response.data.photos);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [refresh]);

  const onClickDeleteSalePhoto = async image => {
    Swal.fire({
      icon: "warning",
      title: "Delete Photo",
      text: "Are you sure to delete this photo?",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
      preConfirm: () => {
        const response = await axios
          .delete(`http://localhost:5000/image/for-sale/${image}`, {
            withCredentials: true
          })
          .catch(error => error.response);
        if (response && response.status === 200) {
          setRefresh(!refresh);
        }
      }
    })
  };

  return (
    <>
      <Navbar />
      {photos === null
        ? "Loading"
        : !photos.length
        ? "Not Found Photo for sale"
        : photos.map((item, index) => (
            <ItemPhotoSale
              {...{ ...item, onClickDeleteSalePhoto }}
              key={index}
            />
          ))}
    </>
  );
};

export default PhotosForSale;
