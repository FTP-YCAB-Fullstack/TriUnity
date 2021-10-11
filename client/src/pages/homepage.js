import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import RandomPhotos from '../components/RandomPhotos'
import CollectionPhotos from '../components/CollectionPhotos'

function Homepage() {
    const [photos, setData] = useState([])
    const [collection, setCollection] = useState([])

    const getData = () => {
        fetch("http://localhost:3500/photos")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setData(json)
        })
    }

    const getCollection = () => {
        fetch("http://localhost:3500/collection")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setCollection(json)
        })
    }

    useEffect(() => {
        getData();
        getCollection()
    }, [])

    return (
        <div> 
            {collection.map((item,index) => {
                <CollectionPhotos {...item} key={index}/> 
            })}
            {photos.map((item, index) => {
                return <RandomPhotos {...item} key={index} />
            })}
        </div>
    )
}

export default Homepage
