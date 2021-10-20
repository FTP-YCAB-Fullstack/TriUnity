import React from 'react'

export default function ViewProfile(props) {
    return (
        <div class="bg-white w-1/3 mx-auto flex flex-col gap-4 justify-center rounded-lg shadow-xl text-left p-8 text-xl">
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