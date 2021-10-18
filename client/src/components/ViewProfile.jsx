import React from 'react'

export default function ViewProfile(props) {
    return (
        <div class="card mr-4text-center px-14 mb-12 bg-blue-900 p-4 border-4 ">
                  <p className="text-start">
                    First Name : {props.firstName ? props.firstName : ""}
                  </p>
                  <p className="text-start">
                    Last Name : {props.lastName ? props.lastName : ""}
                  </p>
                  <p className="text-start">
                    Email : {props.email ? props.email : ""}
                  </p>
                  <p className="text-start">
                    Address : {props.address ? props.address : ""}
                  </p>
                  <p className="text-start">
                    Description : {props.description ? props.description : ""}
                  </p>
                </div>
    )
}