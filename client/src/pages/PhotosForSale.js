import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ItemPhotoSale from "../components/ItemPhotoSale";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import backImage from "../assets/back.png"
import plusImage from "../assets/plus.svg"

const PhotosForSale = (props) => {
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

  const onClicktoHome = () => {
    props.history.push({
      pathname: "/"
    });
  };

  const onClicktoSellPhotos = () => {
    props.history.push({
      pathname: "/sell"
    });
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
      preConfirm: async () => {
        const response = await axios
          .delete(`http://localhost:5000/image/for-sale/${image}`, {
            withCredentials: true
          })
          .catch(error => error.response);
        if (response && response.status === 200) {
          setRefresh(!refresh);
        }
      }
    });
  };

  return !photos ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="mt-16">
        <div className="flex flex-row justify-between p-4">
          <img src={backImage} alt="" className="w-8 h-8 cursor-pointer" onClick={onClicktoHome}/>
          <button className="bg-green-500 py-1 px-4 text-white rounded-lg font-medium" onClick={onClicktoSellPhotos}>Add photo</button>
        </div>
        {photos === null
          ? "Loading"
          : !photos.length
          ? <div className="flex justify-center font-medium">"Not Found Photo for sale"</div>
          : photos.map((item, index) => (
            <ItemPhotoSale
              {...{ ...item, onClickDeleteSalePhoto }}
              key={index}
            />
          ))}
          <div className="flex justify-center items-center h-32 border-2 rounded-xl m-4 p-4 px-6 hover:shadow-inner">
            <img src={plusImage} alt="" className="w-24 h-24 hover:text-gray-800 text-gray-400 cursor-pointer" onClick={onClicktoSellPhotos}/>
          </div>
      </div>
    </>
  );
};

export default PhotosForSale;
