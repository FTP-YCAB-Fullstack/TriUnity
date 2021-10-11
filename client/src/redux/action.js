const getUser = user => {
  return dispacth => {
    dispacth({
      type: "SET_USER",
      payload: {
        user
      }
    });
  };
};

export { getUser };
