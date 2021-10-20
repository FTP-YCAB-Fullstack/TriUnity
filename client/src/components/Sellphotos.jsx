import React, { useState } from "react";
import Navbar from "./Navbar";
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function Sellphotos(props) {
  
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen p-12 flex justify-center items-center">
        <form
          onSubmit={props.onClickSell}
          className="flex flex-col flex-grow w-full my-10"
        >
          <input
            className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
            type="text"
            name="title"
            placeholder="insert title in here..."
          />
          {props.checkedFree ? null : (
            <input
              className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
              type="number"
              name="price"
              min="1000"
              step="1000"
              placeholder="insert price in here..."
            />
          )}
          <textarea
            className="bg-gray-200 focus:ring focus:ring-red-600 focus:outline-none rounded m-4 p-2"
            name="description"
            placeholder="insert description in here..."
          ></textarea>
          {/* <input className="rounded m-4 p-2" type="file" name="image" /> */}
          <FilePond 
          files={props.files}
          onupdatefiles={props.setFiles}
          allowMultiple={true}
          maxFiles={3}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'/>
          <div>
            <input
              className="m-4 p-2"
              type="checkbox"
              checked={props.checkedFree}
              onChange={() => props.setCheckedFree(!props.checkedFree)}
            />
            free photo price
          </div>
          <button
            className="rounded-full bg-green-400 hover:bg-green-600 my-8 p-2 mx-auto w-2/4"
            type="submit"
          >
            Sell
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sellphotos;
