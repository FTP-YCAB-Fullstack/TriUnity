import React from 'react'

function RandomPhotos(props) {
    return (
        <span>
            <img src={props.url.small} alt="photos" className="rounded-lg"/>
            <h1>{props.description}</h1>
        </span>
    )
}

export default RandomPhotos
