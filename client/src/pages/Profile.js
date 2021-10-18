import React, { useState, useEffect } from "react";
import axios from "axios";
import Profilecomponent from "../components/Profile";
import ViewProfile from "../components/ViewProfile";
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

//   const patchData = () => {
//     axios
//       .patch("http://localhost:5000/profile", {withCredentials: true})
//       .then(response => response.data)
//       .then(json => {
//         console.log(json);
//         setData(json);
//       });
//   };
  useEffect(() => {
    getData();
  }, []);

//   const onClicktoProfileController = () => {
//     props.history.push({
//       pathname: "/profile"
//     });
//   };

const onSubmitUpdate = (event) => {
    event.preventDefault()
    axios
    .patch("http://localhost:5000/profile",{firstName:event.target.firstName.value, lastName:event.target.lastName.value, email:event.target.email.value, address:event.target.address.value, description:event.target.description.value},{ withCredentials: true })
    .then(response => response.data.data)
    .then(json => {
      setData(json);
    });
};
 const editProfile = (_id) =>{
console.log(_id,"edit")
 }
 
  return (
    <div>
      <div>
        <div>
          <div class="h-screen bg-gray-200  dark:bg-gray-950   flex flex-wrap items-center  justify-center   ">
            <div class="container lg:1/2 xl:11/3 sm:w-full md:2/2  shadow-lg    transform   duration-250 easy-in-out bg-indigo-400 ">
              <div class=" h-100 overflow-hidden">
                <img
                  class="w-full"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"
                  alt=""
                />
              </div>
              <div class="flex justify-center px-6 -mt-20">
                <img
                  class="box-content h-32 w-32 p-4 bg-white  mx-auto rounded-full  "
                  src={
                    data.image
                      ? data.image
                      : "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                  }
                  alt=""
                />
              </div>
              <div class=" ">
                <div className="flex flex-row justify-end align-end">
                  <header className="mr-4">
                    <span onClick={ editProfile(data._id) }>
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </header>
                </div>
                <Profilecomponent onSubmitUpdate = {onSubmitUpdate} {...data}/>
                <ViewProfile {...data}/>
                {/* <div class="text-center px-14 mb-12">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
