import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailPhoto from "../components/DetailPhoto";
import Navbar from "../components/Navbar";
import Masonry from "react-masonry-css";
import RandomPhotos from "../components/RandomPhotos";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function DetailPhotos(props) {
  const [photos, setData] = useState([]);
  const id = props.match.params.id;
  const [detailPhotos, setDetailPhotos] = useState(id);
  const [isLoading, setLoading] = useState(true);

  const getDownloadFromApi = async () => {
    const { data } = await axios.get(
      detailPhotos.data.download +
        "?client_id=qN-U_v7VlbUf0Yb_91yXwDtXhPgtf3j9LDrzQsWvAww"
    );
    const response = await axios.get(data.url, { responseType: "blob" });
    const url = URL.createObjectURL(new Blob([response.data]));
    detailPhotos.data.download = url;
    console.log(url);
    setLoading(false);
  };

  const getData = async () => {
    axios
      .get(`http://localhost:5000/photos`)
      .then(response => response.data)
      .then(json => {
        setData(json);
      });
  };

  const getDetailPhoto = async () => {
    await axios
      .get(`http://localhost:5000/detailpage/${id}`)
      .then(response => response.data)
      .then(json => {
        setDetailPhotos(json);
      });
  };

  const onClicktoDetailPhotos = id => {
    props.history.push({
      pathname: `/detailpage/${id}`
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDetailPhoto();
  }, [id]);

  useEffect(() => {
    if (detailPhotos.data) {
      setLoading(true);
      if (id[0] === "a") {
        getDownloadFromApi();
      } else {
        if (isLoading) {
          setLoading(false);
        }
      }
    }
  }, [detailPhotos]);

  return isLoading ? (
    "loading"
  ) : (
    <div>
      <Navbar />
      <DetailPhoto {...{ ...detailPhotos, id }} />
      <Masonry
        breakpointCols={{ default: 5, 800: 2 }}
        className="my-masonry-grid mx-12 my-7"
        columnClassName="my-masonry-grid_column"
      >
      {photos.map((item, index) => {
        return (
          <RandomPhotos
            onClicktoDetailPhotos={onClicktoDetailPhotos}
            {...item}
            key={index}
          />
        );
      })}
      </Masonry>
    </div>
  );
}

export default DetailPhotos;
