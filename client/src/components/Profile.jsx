import React from "react";


const Profile = (props) => {
    return(
        <div class="bg-white flex-grow w-full my-10 rounded row-span-1 flex justify-center flex-row flex-wrap border-blue-700">
        <form onSubmit= { (even) => props.onSubmitUpdate(even)} class="flex flex-col mb-8 text-left" >
            <input type="text" name="firstName" placeholder={props.firstName ? props.firstName : ""}/>
            <input type="text" name="lastName" placeholder={props.lastName ? props.lastName : ""}/>
            <input type="text" name="email" placeholder={props.email ? props.email : ""}/>
            <input type="text" name="address" placeholder={props.address ? props.address : ""}/>
            <input type="text" name="description" placeholder={props.description ? props.description : ""}/>
            <button  class="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded"type="submit">Save</button>
        </form>
        </div>
    )
} 

export default Profile