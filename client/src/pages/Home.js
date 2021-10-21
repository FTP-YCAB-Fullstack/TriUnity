import React, { useState, useEffect, useRef } from "react";
import RandomPhotos from "../components/RandomPhotos";
import CollectionPhotos from "../components/CollectionPhotos";
import axios from "axios";
import NavbarHome from "../components/NavbarHome";
import Header from "../components/Header";
import Masonry from "react-masonry-css";
import NavbarTransparent from "../components/NavbarTransparent";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { setRandomPhotos } from "../redux/action";

function Homepage(props) {
  const [localPhotos, setLocalPhotos] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const selection = useRef(null);
  const dispatch = useDispatch();
  const photos = useSelector(state => state.randomPhotos);
  const searchRef = useRef();

  const getPhotosLocal = () => {
    axios
      .get("https://fierce-headland-22833.herokuapp.com/photos/local")
      .then(response => response.data.data)
      .then(json => {
        console.log(json);
        setLocalPhotos(json);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    dispatch(setRandomPhotos);
    getPhotosLocal();
  }, []);

  const onClicktoSellPhotos = () => {
    props.history.push({
      pathname: "/sell"
    });
  };

  const scrollHandler = () => {
    if (selection.current) {
      const maxWidth = selection.current.scrollWidth;
      const currentScroll = selection.current.scrollLeft;
      selection.current.scrollTo(currentScroll + maxWidth / 4, 0);
      if (currentScroll + selection.current.clientWidth == maxWidth) {
        selection.current.scrollTo(0, 0);
      }
    }
  };

  const onClicktoDetailPhotos = id => {
    props.history.push({
      pathname: `/detailpage/${id}`
    });
  };

  const onSubmitSearch = async event => {
    event.preventDefault();
    try {
      const valueSearch = event.target.search.value;
      const response = await axios.get(
        `https://fierce-headland-22833.herokuapp.com/search/photos/?query=${valueSearch.trim()}`,
        { withCredentials: true }
      );
      if (response && response.status === 200) {
        setSearchResult(response.data.data);
        if (valueSearch.trim() !== "") {
          searchRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !photos || !localPhotos ? (
    <Loading />
  ) : (
    <div>
      <NavbarTransparent />
      <NavbarHome className="z-50" />
      <Header
        onClicktoSellPhotos={onClicktoSellPhotos}
        onSubmitSearch={onSubmitSearch}
      />
      {!searchResult.length ? null : (
        <h1
          ref={searchRef}
          className="font-bold p-4 flex justify-center text-2xl"
        >
          Result
        </h1>
      )}
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
      <h1 className="font-bold p-4 flex justify-center text-2xl">
        Photos on Sale
      </h1>
      <div className="relative">
        <button
          className="absolute bg-white bottom-0 h-full rounded-l-xl right-0 px-3 shadow-md text-black font-medium"
          onClick={scrollHandler}
        >
          next
        </button>
        <div
          className="grid grid-rows-1 grid-flow-col gap-4 pr-12 mt-4 px-8 ml-3 overflow-x-hidden"
          ref={selection}
          style={{ scrollBehavior: "smooth" }}
        >
          {localPhotos.map((item, index) => {
            return (
              <CollectionPhotos
                onClicktoDetailPhotos={onClicktoDetailPhotos}
                {...item}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <h1 className="font-bold p-4 flex justify-center text-2xl">
        Random Photos
      </h1>
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
