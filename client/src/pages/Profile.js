import React, { useState, useEffect } from "react";
import axios from "axios";
import Profilecomponent from "../components/Profile";
import ViewProfile from "../components/ViewProfile";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import Loading from "../components/Loading";

function Profile() {
  const [data, setData] = useState({});
  const [isEdit, setEdit] = useState(false);
  const [cookies] = useCookies(["token"]);

  const getData = () => {
    axios
      .get("https://fierce-headland-22833.herokuapp.com/profile", {
        headers: {
          token: cookies.token
        }
      })
      .then(response => response.data.data)
      .then(json => {
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, [isEdit]);

  const onSubmitUpdate = event => {
    event.preventDefault();
    axios
      .patch(
        "https://fierce-headland-22833.herokuapp.com/profile",
        {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          address: event.target.address.value,
          description: event.target.description.value
        },
        {
          headers: {
            token: cookies.token
          }
        }
      )
      .then(response => response.data.data)
      .then(json => {
        setEdit(false);
        setData(json);
      });
  };

  return !data ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <div>
        <div>
          <div className="h-auto bg-gray-200 flex flex-wrap items-center justify-center rounded-lg">
            <div className="container lg:1/2 xl:11/3 sm:w-full md:2/2 transform duration-250 easy-in-out bg-gray-100  border-blue-300 rounded-lg">
              <div className=" h-100 overflow-hidden row-span-3">
                <img
                  className="w-full bg-white rounded-t-lg"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"
                  alt=""
                />
              </div>
              <div className="flex justify-center px-6 -mt-20 bg-gray-100">
                <img
                  className="box-content h-32 w-50 p-4 bg-gray-300 mx-auto rounded-full flex-justify-center bg-gray-100"
                  src={
                    data.image
                      ? data.image
                      : "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                  }
                  alt=""
                />
              </div>
              <div className="bg-gray-100">
                <div className="flex flex-row justify-end align-end">
                  <header className="mr-4">
                    <span onClick={() => setEdit(true)}>
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                  </header>
                </div>
                {isEdit ? (
                  <Profilecomponent onSubmitUpdate={onSubmitUpdate} {...data} />
                ) : (
                  <ViewProfile {...data} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
