import React, { useState, useEffect } from "react";
// import Header from '../components/Header'
import RandomPhotos from "../components/RandomPhotos";
import CollectionPhotos from "../components/CollectionPhotos";
import axios from "axios";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Masonry from "react-masonry-css";

function Homepage(props) {
  const [photos, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  console.log(searchResult);

  const getData = () => {
    axios
      .get("http://localhost:5000/photos")
      .then(response => response.data)
      .then(json => {
        console.log(json);
        setData(json);
      });
  };

  const getCollection = () => {
    axios
      .get("http://localhost:5000/collection")
      .then(response => response.data)
      .then(json => {
        console.log(json);
        setCollection(json);
      });
  };

  useEffect(() => {
    getData();
    getCollection();
  }, []);

  const onClicktoSellPhotos = () => {
    props.history.push({
      pathname: "/sell"
    });
  };

  const onSubmitSearch = async event => {
    event.preventDefault();
    try {
      const valueSearch = event.target.search.value;
      const response = await axios.get(
        `http://localhost:5000/search/photos/?query=${valueSearch}`,
        { withCredentials: true }
      );
      console.log(response);
      if (response && response.status === 200) {
        setSearchResult(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar className="z-50" />
      <Header
        onClicktoSellPhotos={onClicktoSellPhotos}
        onSubmitSearch={onSubmitSearch}
      />
      {searchResult === "" ? null : <h1>Searching result..</h1>}
      {searchResult === "" ? null : (
        <Masonry
          breakpointCols={{ default: 5, 800: 2 }}
          className="my-masonry-grid mx-12 my-7"
          columnClassName="my-masonry-grid_column"
        >
          {searchResult.map((item, index) => {
            return <RandomPhotos {...item} key={index} />;
          })}
        </Masonry>
      )}
      <h1>Collection</h1>
      <div className="grid grid-rows-1 grid-flow-col gap-4 mt-7">
        {collection.map((item, index) => {
          return item.tags[0] ? (
            <CollectionPhotos {...item} key={index} />
          ) : null;
        })}
      </div>
      <h1>Random Photos</h1>
      <Masonry
        breakpointCols={{ default: 5, 800: 2 }}
        className="my-masonry-grid mx-12 my-7"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((item, index) => {
          return <RandomPhotos {...item} key={index} />;
        })}
      </Masonry>
    </div>
  );
}

export default Homepage;
