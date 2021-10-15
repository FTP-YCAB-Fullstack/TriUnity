import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ItemPhotoSale from "../components/ItemPhotoSale";
import axios from "axios";

const PhotosForSale = props => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const getPhotos = async () => {
    const response = await axios
      .get("http://localhost:5000/image/for-sale", { withCredentials })
      .catch(error => error.response);
    if (response && response.status === 200) {
      setPhotos(response.data.photos);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <Navbar />
      <ItemPhotoSale />
    </>
  );
};

export default PhotosForSale;
