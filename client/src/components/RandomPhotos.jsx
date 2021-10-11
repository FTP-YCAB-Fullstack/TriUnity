import React from 'react'

function RandomPhotos(props) {
    return (
        <div>
            <img src={props.url.small} alt="photos" className="w-2/3 h-auto"/>
            <h1>{props.description}</h1>
        </div>
    )
}

export default RandomPhotos
