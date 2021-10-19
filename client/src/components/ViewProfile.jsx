import React from 'react'

export default function ViewProfile(props) {
    return (
        <div class=" bg-white w-full flex flex-col items-center justify-center rounded-lg border-2 mb-8">
                  <p className="text-start row">
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