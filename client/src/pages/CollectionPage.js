import React, { useState, useEffect } from 'react'
import RandomPhotos from '../components/RandomPhotos'
import axios from 'axios'
import Masonry from 'react-masonry-css'


function CollectionPage(props) {
    const title = props.match.params.title
    const [ detailcollection, setDetailCollection ] = useState([])


    const getSearchByCollection = async () => {
        await axios
          .get(`http://localhost:5000/search/photos/?query=${title}`)
          .then(response => response.data)
          .then(json => {
            setDetailCollection(json);
          });
      };
    
    const onClicktoDetailPhotos = id => {
        props.history.push({
          pathname: `/detailpage/${id}`
        });
      };
    
    useEffect(() => {
    getSearchByCollection();
    }, [title]);
      

    return (
        <div>
            <h1>Collection</h1>

            {!detailcollection.length ? null : <h1>Searching result..</h1>}
            {!detailcollection.length ? null : (
                <Masonry
                breakpointCols={{ default: 5, 800: 2 }}
                className="my-masonry-grid mx-12 my-7"
                columnClassName="my-masonry-grid_column"
                >
                {detailcollection.map((item, index) => {
                    return (
                    <RandomPhotos
                        onClicktoDetailPhotos={onClicktoDetailPhotos}
                        {...item}
                        key={index}
                    />
                    );
                })}
                </Masonry>
            )}
        </div>
    )
}

export default CollectionPage
