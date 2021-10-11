import React from 'react'

function CollectionPhotos(props) {
    return (
        <div>
            <img src={props.tags.image} alt={props.title} className="w-2/3 h-auto"/>
            <h1>{props.tags.description}</h1>
        </div>
    )
}

export default CollectionPhotos
