import React, { useState, useEffect} from 'react'
// import Header from '../components/Header'
import RandomPhotos from '../components/RandomPhotos'
import CollectionPhotos from '../components/CollectionPhotos'
import axios from "axios"
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Masonry from 'react-masonry-css'


function Homepage(props) {
    const [photos, setData] = useState([])
    const [collection, setCollection] = useState([])

    const getData = () => {
        axios.get("http://localhost:3500/photos")
        .then((response) => response.data)
        .then((json) => {
            console.log(json)
            setData(json)
        })
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

    const onClicktoLogin = () => {
        props.history.push({
          pathname: "/signin"
        });
      };

    const onClicktoKeranjang = () => {
        props.history.push({
            pathname: "/keranjang"
        })
    }

    const onClicktoSellPhotos = () => {
        props.history.push({
            pathname: "/sell"
        })
    }

    const onClicktoHome = () => {
        props.history.push({
            pathname: "/home"
        })
    }

    return (
        <div> 
            <Navbar onClicktoLogin={onClicktoLogin} 
            onClicktoKeranjang={onClicktoKeranjang} 
            onClicktoHome={onClicktoHome}
            className="z-50"/>
            <Header onClicktoSellPhotos={onClicktoSellPhotos}/>
            <h1>Collection</h1>
            <div className="grid grid-rows-1 grid-flow-col gap-4 mt-7">
            {collection.map((item,index) => {
                return (item.tags[0] ?  <CollectionPhotos {...item} key={index}/> : null)
            })}
            </div>
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

export default Homepage
