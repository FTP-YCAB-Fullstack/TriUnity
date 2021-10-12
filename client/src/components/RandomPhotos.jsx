import React from 'react'

function RandomPhotos(props) {
    return (
        <div>
            <img src={props.url.small} alt="photos" className="rounded-2xl"/>
            <h1>{props.description}</h1>
        </div>
    )
}

export default RandomPhotos
