import React, { useState, useEffect, useRef } from "react";
import RandomPhotos from "../components/RandomPhotos";
import CollectionPhotos from "../components/CollectionPhotos";
import axios from "axios";
import NavbarHome from "../components/NavbarHome";
import Header from "../components/Header";
import Masonry from "react-masonry-css";
import NavbarTransparent from "../components/NavbarTransparent";
import Loading from "../components/Loading"

function Homepage(props) {
  const [photos, setData] = useState(null);
  const [collection, setCollection] = useState(null);
  const [localPhotos, setLocalPhotos] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const selection = useRef(null)

  const getData = () => {
    axios
      .get("http://localhost:5000/photos") 
      .then(response => response.data)
      .then(json => {
        setData(json);
      });
  };

  const getCollection = () => {
    axios
      .get("http://localhost:5000/collections")
      .then(response => response.data)
      .then(json => {
        setCollection(json);
      });
  };

  const getPhotosLocal = () => {
    axios
      .get("http://localhost:5000/photos/local")
      .then(response => response.data.data)
      .then(json => {
        setLocalPhotos(json);
      });
  };

  useEffect(() => {
    getData();
    getCollection();
    getPhotosLocal();
  }, []);

  const onClicktoSellPhotos = () => {
    props.history.push({
      pathname: "/sell"
    });
  };

  const scrollHandler = () => {
    if(selection.current) {
      const maxWidth  = selection.current.scrollWidth
      const currentScroll = selection.current.scrollLeft
      selection.current.scrollTo(currentScroll + (maxWidth / 4),0)
      console.log(currentScroll, maxWidth, selection.current.clientWidth)
      if(currentScroll + selection.current.clientWidth == maxWidth){
        selection.current.scrollTo(0,0)
        console.log('ini harusnya balik ke awal')
      }
    }
  }

  const onClicktoDetailPhotos = id => {
    props.history.push({
      pathname: `/detailpage/${id}`
    });
  };

  const onClicktoPatternCollection = title => {
    props.history.push({
      pathname: `/collections/${title}`
    })
  }

  const onSubmitSearch = async event => {
    event.preventDefault();
    try {
      const valueSearch = event.target.search.value;
      const response = await axios.get(
        `http://localhost:5000/search/photos/?query=${valueSearch}`,
        { withCredentials: true }
      );
      if (response && response.status === 200) {
        setSearchResult(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !photos || !collection || !localPhotos ? (
    <Loading />
  ) : (
    <div>
      <NavbarTransparent />
      <NavbarHome className="z-50" />
      <Header
        onClicktoSellPhotos={onClicktoSellPhotos}
        onSubmitSearch={onSubmitSearch}
      />
      {!searchResult.length ? null : <h1 className="font-bold p-4 flex justify-center text-2xl">Result</h1>}
      {!searchResult.length ? null : (
        <Masonry
          breakpointCols={{ default: 5, 800: 2 }}
          className="my-masonry-grid  mx-4 md:mx-12 my-7"
          columnClassName="my-masonry-grid_column"
        >
          {searchResult.map((item, index) => {
            return (
              <RandomPhotos
                onClicktoDetailPhotos={onClicktoDetailPhotos}
                {...item}
                key={index}
              />
            );
          })}
        </Masonry>
      )}
      <h1 className="font-bold p-4 flex justify-center text-2xl">Photos on Sale</h1>
      <div className="relative">
        <button className="absolute bg-red-600 right-0 rounded-lg px-3 shadow-md " onClick={scrollHandler}>next</button>
        <div
          className="grid grid-rows-1 grid-flow-col gap-4 pr-12 mt-4 px-8 ml-3 overflow-x-hidden" ref={selection} style={{scrollBehavior: 'smooth'}}
        >
          {localPhotos.map((item, index) => {
            return (
              <CollectionPhotos onClicktoPatternCollection={onClicktoPatternCollection} {...item} key={index} />
            );
          })}
        </div>
      </div>
      <h1 className="font-bold p-4 flex justify-center text-2xl">Random Photos</h1>
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

export default Homepage;
