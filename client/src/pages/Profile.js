import React, { useState, useEffect } from "react";
import axios from "axios";
import Profilecomponent from "../components/Profile";
import ViewProfile from "../components/ViewProfile";
import Navbar from "../components/Navbar";

function Profile() {
  const [data, setData] = useState({});
    console.log(data);
  const [isEdit, setEdit] = useState(false)
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
  }, [isEdit]);

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
      setEdit(false)
      setData(json);
    });
};
 const editProfile = (_id) =>{
console.log(_id,"edit")
 }

 
  return (
    <div>
      <Navbar/>
      <div>
        <div>
          <div class="h-auto bg-gray-200 flex flex-wrap items-center justify-center rounded-lg">
            <div class="container lg:1/2 xl:11/3 sm:w-full md:2/2 transform duration-250 easy-in-out bg-gray-100  border-blue-300 rounded-lg">
              <div class=" h-100 overflow-hidden row-span-3" >
                <img
                  class="w-full bg-white rounded-t-lg"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"
                  alt=""
                />
              </div>
              <div class="flex justify-center px-6 -mt-20 bg-gray-100">
                <img
                  class="box-content h-32 w-50 p-4 bg-gray-300 mx-auto rounded-full flex-justify-center bg-gray-100"
                  src={
                    data.image
                      ? data.image
                      : "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                  }
                  alt=""
                />
              </div>
              <div class="bg-gray-100">
                <div className="flex flex-row justify-end align-end">
                  <header className="mr-4">
                    <span onClick={() => setEdit(true)}>
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </header>
                </div>
                {isEdit ? <Profilecomponent onSubmitUpdate = {onSubmitUpdate} {...data}/>:
                <ViewProfile {...data} />}
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
