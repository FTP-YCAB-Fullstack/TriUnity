import React from 'react'

function CollectionPhotos(props) {
    return (
        <div>
            <div className="w-64 h-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <img src={props.tags[0].image} alt={props.title} className="h-full"/>
            </div>
        </div>
    )
}

export default CollectionPhotos
