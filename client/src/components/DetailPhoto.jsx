import React from "react";

function DetailPhoto(props) {
  return (
    <div className="h-2xl md:h-screen p-5 mt-16 flex justify-center items-center">
      <div className="max-h-full w-4/5 mb-12 bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-2xl">
        <div className="w-full h-full flex items-center bg-yellow-600">
          <img
            src={props.data === undefined ? "" : props.data.image}
            alt="foto gue"
            className="w-full rounded-bl-3xl pointer-events-none"
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
                  ? "Untitle Photo"
                  : props.data.title
                  ? props.data.title
                  : "Untitle Photo"}
              </h1>
              <div className="flex flex-row items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src={
                      props.data === undefined
                        ? "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                        : props.data.user.image
                        ? props.data.user.image
                        : "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                    }
                    alt="user"
                    className="pointer-events-none"
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
              <button
                className="bg-red-600 py-2 px-8 rounded-full"
                onClick={() =>
                  props.onClickDownload(
                    props.data === undefined ? "#" : props.data.download,
                    props.data === undefined
                      ? "photo-futuccrup.png"
                      : props.data.title
                      ? props.data.title + ".png"
                      : "photo-futuccrup.png",
                    props.data === undefined
                      ? "Free"
                      : props.data.price === undefined
                      ? "Free"
                      : props.data.price
                  )
                }
              >
                {props.data === undefined
                  ? "Download"
                  : props.data.price === undefined
                  ? "Download"
                  : "Buy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPhoto;
