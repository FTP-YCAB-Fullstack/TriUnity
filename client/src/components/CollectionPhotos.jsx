import React from 'react'

function CollectionPhotos(props) {
    return (
        <div>
            <div className="w-48 h-72 cursor-pointer overflow-hidden bg-black hover:brightness-50 rounded-lg">
            <img src={props.url} alt={props.title} className="h-full"/>
            </div>
        </div>
    )
}

export default CollectionPhotos
