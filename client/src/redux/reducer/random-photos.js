const initialState = null;

const randomPhotos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM_PHOTOS":
      return action.payload.randomPhotos;

    default:
      return state;
  }
};

export default randomPhotos;
