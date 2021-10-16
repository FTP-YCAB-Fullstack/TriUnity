import React from "react";


const Profile = (props) => {
    return(
        <form onSubmit= { (even) => props.onSubmitUpdate(even,props.firstName, props.lastName, props.email )}>
            <input type="text" name="firstName" placeholder={props.firstName ? props.firstName : ""}/>
            <input type="text" name="lastName" placeholder={props.lastName ? props.lastName : ""}/>
            <input type="text" name="email" placeholder={props.email ? props.email : ""}/>
            <input type="text" name="address" placeholder={props.address ? props.address : ""}/>
            <input type="text" name="description" placeholder={props.description ? props.description : ""}/>
            <button type="submit">Save</button>
        </form>
    )
} 
export default Profile