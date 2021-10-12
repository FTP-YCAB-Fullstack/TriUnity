import React from 'react'

function CollectionPhotos(props) {
    return (
        <div>
            <div>
            <img src={props.tags[0].image} alt={props.title}/>
            </div>
            {/* <h1>{props.tags.description}</h1> */}
        </div>
    )
}

export default CollectionPhotos
