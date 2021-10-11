import React from "react";
import imgProfile from "../assets/Renita.jpg"

function Profile() {
    return (
        <div>
            <div>
            <div>
            <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <img class=" h-36 w-36 bg-white p-2 rounded-full" src={imgProfile} alt="" />

                </div>
                <div class=" ">
                <div className="flex flex-row justify-end align-end">
                    <header className="mr-4">
                        <span><i class="fas fa-pencil-alt"></i></span>
                    </header>
                </div>
                    <div class="text-center px-14 mb-12">
                        <h2 class="text-gray-800 text-3xl font-bold">Renita</h2>
                        <p className="text-start">First Name : Renita</p>
                        <p className="text-start">Last Name : Nathania</p>
                        <p className="text-start">Email : renita@gmail.com</p>
                        <p className="text-start">Address : Jakarta Barat</p>
                        <p className="text-start">Description : I like sleep</p>
                    </div>
                </div>
            </div>
        </div>
                
            </div>
            </div>
        </div>
    )
}
export default Profile 