import axios from "axios";

const setRandomPhotos = async dispacth => {
  const { data } = await axios.get(
    "https://fierce-headland-22833.herokuapp.com/photos"
  );
  dispacth({
    type: "SET_RANDOM_PHOTOS",
    payload: {
      randomPhotos: data
    }
  });
};

export { setRandomPhotos };
