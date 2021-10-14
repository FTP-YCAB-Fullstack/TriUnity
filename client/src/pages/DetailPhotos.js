import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DetailPhoto from '../components/DetailPhoto'
import Navbar from '../components/Navbar'
import Masonry from 'react-masonry-css'
import RandomPhotos from '../components/RandomPhotos'

function DetailPhotos(props) {
    const [photos, setData] = useState([])

    const getData = () => {
        console.log('ini get data')
        axios.get("http://localhost:5000/photos")
        .then((response) => response.data)
        .then((json) => {
            setData(json)
        })
    };

    useEffect(() => {
        getData()
        console.log("ini effect")
    },[])

    console.log(photos)

    return (
        <div>
            <Navbar />
            <DetailPhoto />
            <Masonry 
                breakpointCols={{default: 5, 800: 2}}
                className="my-masonry-grid mx-12 my-7"
                columnClassName="my-masonry-grid_column">
            {photos.map((item, index) => {
                return <RandomPhotos {...item} key={index} />
            })} 
            </Masonry>
        </div>
    )
}

export default DetailPhotos
