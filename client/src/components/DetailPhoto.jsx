import React, { useState } from "react";
import axios from "axios";

function DetailPhoto(props) {
  const [isLoading, setLoading] = useState(true);

  const getDownloadFromApi = async () => {
    if (props.data !== undefined) {
      const { data } = await axios.get(
        props.data.download +
          "?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s"
      );
      const response = await axios.get(data.url, { responseType: "blob" });
      const url = URL.createObjectURL(new Blob([response.data]));
      props.data.download = url;
      setLoading(false);
    }
  };

  if (props.id[0] === "a") {
    getDownloadFromApi();
  } else {
    if (props.data) {
      setLoading(false);
    }
  }
  return isLoading ? (
    "Loading"
  ) : (
    <div className="bg-red-600 h-2xl md:h-screen p-5 flex justify-center items-center">
      <div className="h-full w-4/5 bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row">
        <div className="w-full h-full flex items-center bg-yellow-600">
          <img
            src={props.data === undefined ? "" : props.data.image}
            alt="foto gue"
            className="w-full rounded-bl-3xl"
          />
        </div>
        <div className="w-full h-full bg-white p-7 flex flex-col">
          <div className="flex flex-row justify-between">
            <h2>
              {props.data === undefined
                ? "Free"
                : props.data.price === undefined
                ? "Free"
                : props.data.price}
            </h2>
          </div>
          <div className="h-full flex-col flex justify-between">
            <div className="pt-12">
              <h1 className="mb-3">
                {props.data === undefined
                  ? "AESTHETIC PHOTO"
                  : props.data.title}
              </h1>
              <div className="flex flex-row items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src={props.data === undefined ? "" : props.data.user.image}
                    alt="user"
                  />
                </div>
                <h1>
                  {props.data === undefined ? "" : props.data.user.fullName}
                </h1>
              </div>
            </div>
            <div>
              <h1>Description :</h1>
              <p>
                {props.data === undefined
                  ? "this photo has no description"
                  : !props.data.description
                  ? "this photo has no description"
                  : props.data.description}
              </p>
            </div>

            <div className="flex justify-end">
              <button className="bg-red-600 py-2 px-8 rounded-full">
                <a
                  href={`${
                    props.data === undefined ? "#" : props.data.download
                  }`}
                  download="photo.png"
                >
                  Buy
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPhoto;
