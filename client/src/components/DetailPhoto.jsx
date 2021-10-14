import React from 'react'
import Photo from '../assets/SignIn.jpeg'

function DetailPhoto(props) {

    return (
        <div className="bg-red-600 h-2xl md:h-screen p-5 flex justify-center items-center">
            <div className="h-full w-4/5 bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row">
                <div className="w-full h-full bg-yellow-600">
                    <img src={Photo} alt="foto gue" className="h-full"/>
                </div>
                <div className="w-full h-full bg-white p-7 flex flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <h3>Download</h3>
                        <h2>Free</h2>
                    </div>
                    <div>
                        <h1 className="mb-3">AESTHETIC PHOTO</h1>
                        <div className="flex flex-row items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-gray-400 "></div>
                            <h1>UserName</h1>
                        </div>
                    </div>
                    <div>
                        <h1>Description</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                    </div>

                    <div className="flex justify-end">
                        <button className="bg-red-600 py-2 px-8 rounded-full">
                            Beli
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DetailPhoto
