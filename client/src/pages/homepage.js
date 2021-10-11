import React, { useState, useEffect} from 'react'
// import Header from '../components/Header'
import RandomPhotos from '../components/RandomPhotos'
import CollectionPhotos from '../components/CollectionPhotos'
import axios from "axios"

function Homepage() {
    const [photos, setData] = useState([])
    const [collection, setCollection] = useState([])

    const getData = () => {
        axios.get("http://localhost:3500/photos")
        .then((response) => response.data)
        .then((json) => {
            console.log(json)
            setData(json)
        })
        // fetch("http://localhost:3500/photos")
        // .then((response) => response.json())
        // .then((json) => {
        //     console.log(json)
        //     setData(json)
        // })
    };

    const getCollection = () => {
        axios.get("http://localhost:3500/collection")
        .then((response) => response.data)
        .then((json) => {
            console.log(json)
            setCollection(json)
        })
    };

    useEffect(() => {
        getData();
        getCollection()
    }, [])

    return (
        <div> 
            <div className="grid grid-rows-1 grid-flow-col gap-4">
            {collection.map((item,index) => {
                return item.tags[0] ?  <CollectionPhotos {...item} key={index}/> : null 
            })}
            </div>
            <div className="grid grid-cols-5 gap-4 p-5">
            {photos.map((item, index) => {
                return <RandomPhotos {...item} key={index} />
            })} 
            </div>
        </div>
    )
}

export default Homepage
