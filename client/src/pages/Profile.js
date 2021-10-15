import React, { useState, useEffect } from "react";
import imgProfile from "../assets/Renita.jpg";
import axios from "axios";

function Profile() {
  const [data, setData] = useState({});
  console.log(data);
  const getData = () => {
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then(response => response.data.data)
      .then(json => {
        setData(json);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <div>
          <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
              <div class=" h-32 overflow-hidden">
                <img
                  class="w-full"
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt=""
                />
              </div>
              <div class="flex justify-center px-5  -mt-12">
                <img
                  class=" h-36 w-36Renita bg-white p-2 rounded-full"
                  src={imgProfile}
                  alt=""
                />
              </div>
              <div class=" ">
                <div className="flex flex-row justify-end align-end">
                  <header className="mr-4">
                    <span>
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </header>
                </div>
                <div class="text-center px-14 mb-12">
                  {/* <h2 class="text-gray-800 text-3xl font-bold">Renita</h2> */}
                  <p className="text-start">
                    First Name : {data.firstName ? data.firstName : ""}
                  </p>
                  <p className="text-start">
                    Last Name : {data.lastName ? data.lastName : ""}
                  </p>
                  <p className="text-start">
                    Email : {data.email ? data.email : ""}
                  </p>
                  <p className="text-start">
                    Address : {data.address ? data.address : ""}
                  </p>
                  <p className="text-start">
                    Description : {data.description ? data.description : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
