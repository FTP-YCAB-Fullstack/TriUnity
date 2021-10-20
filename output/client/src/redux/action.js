import axios from "axios";

const setRandomPhotos = async dispacth => {
  const { data } = await axios.get("http://localhost:5000/photos");
  dispacth({
    type: "SET_RANDOM_PHOTOS",
    payload: {
      randomPhotos: data
    }
  });
};

export { setRandomPhotos };
