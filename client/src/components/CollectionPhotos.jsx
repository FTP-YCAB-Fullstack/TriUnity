import React from 'react'

function CollectionPhotos(props) {
    return (
        <div>
            <div className="w-48 h-72 cursor-pointer overflow-hidden bg-black rounded-lg hover:">
            <img src={props.tags[0].image} alt={props.title} className="h-full"/>
            </div>
        </div>
    )
}

export default CollectionPhotos
