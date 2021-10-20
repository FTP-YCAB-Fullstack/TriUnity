import React from "react";


const Profile = (props) => {
    return(
        <div class="bg-white flex-grow w-full my-10 rounded row-span-1 flex justify-center flex-row flex-wrap border-black-300 bg-gray-100">
        <form onSubmit= { (even) => props.onSubmitUpdate(even)} class="w-1/3 mx-auto mb-8 text-left gap-4" >
            <input type="text" name="firstName" placeholder={props.firstName ? props.firstName : ""} class="py-3 px-6 rounded-md w-full block my-2 shadow-md"/>
            <input type="text" name="lastName" placeholder={props.lastName ? props.lastName : ""} class="py-3 px-6 rounded-md w-full block my-2 shadow-md"/>
            <input type="text" name="email" placeholder={props.email ? props.email : ""} class="py-3 px-6 rounded-md  w-full block my-2 shadow-md "/>
            <input type="text" name="address" placeholder={props.address ? props.address : ""} class="py-3 px-6 rounded-md  w-full block my-2 shadow-md "/>
            <input type="text" name="description" placeholder={props.description ? props.description : ""} class="py-3 px-6 rounded-md w-full block my-2 shadow-md "/>
            <button  class="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-4 border border-blue-700 rounded-md m-2 my-2 block mx-auto mt-5"type="submit">Save</button>
        </form>
        </div>
    )
} 

export default Profile