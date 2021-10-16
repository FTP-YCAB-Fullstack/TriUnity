import React from 'react'

function DetailPhoto(props) {
    return (
        <div className="bg-red-600 h-2xl md:h-screen p-5 flex justify-center items-center">
            <div className="h-full w-4/5 bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row">
                <div className="w-full h-full flex items-center bg-yellow-600">
                    <img src={props.data === undefined ? "" : props.data.image} alt="foto gue" className="w-full rounded-bl-3xl"/>
                </div>
                <div className="w-full h-full bg-white p-7 flex flex-col">
                    <div className="flex flex-row justify-between">
                        <h3>Download</h3>
                        <h2>Free</h2>
                    </div>
                    <div className="h-full flex-col flex justify-between">
                        <div className="pt-12">
                            <h1 className="mb-3">AESTHETIC PHOTO</h1>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-12 w-12 rounded-full bg-gray-400 overflow-hidden">
                                    <img src={props.data === undefined ? "" : props.data.user.profile_image} alt="user"/>
                                </div>
                                <h1>{props.data === undefined ? "" : props.data.user.username}</h1>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-red-600 py-2 px-8 rounded-full">
                                Beli
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DetailPhoto
