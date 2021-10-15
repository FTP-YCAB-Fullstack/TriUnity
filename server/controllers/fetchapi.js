const axios = require("axios");

class FetchApiController {
    static getRandom = async (req,res) => {
        try {
            let url = "https://api.unsplash.com/photos/random?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s&count=30"
            const data = await axios({
                method: 'GET',
                url: url
            });
            // console.log(url)
    
            res.send(data.data.map(function 
                (item) {
                return {
                    id : item.id,
                    description : item.alt_description,
                    url : item.urls,
                    user : item.user
                }
            }))
        } catch (error) {
            res.status(500).json({
                message: error.message || "internal server error"
            })
        }
    }

    static getCollection = async (req,res) => {
        try {
            let url = "https://api.unsplash.com/collections/?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s"
            const data = await axios({
                method: 'GET',
                url: url
            });
            // console.log(url)
    
            res.send(data.data.map(function
                (item) {
                return {
                    id : item.id,
                    title : item.title,
                    tags : item.tags
                    .map(function(items) {
                        if(items.source) {
                            return {
                                image_id : items.source.cover_photo.id,
                                image : items.source.cover_photo.urls.small,
                                description : items.source.cover_photo.alt_description,
                                user : items.source.cover_photo.user.profile_image.medium
                            }
                        } return items.source
                    })
                    .filter(function(items) {
                        console.log(items)
                        return items !== undefined
                    })
                }
            }))
        } catch (error) {
            res.status(500).json({
                message: error.message || "internal server error"
            })
        }
    }
    static getDetailPhoto = async (req, res) => {
        try {
            const { id } = req.params
            const url = `https://api.unsplash.com/photos/${id}?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s`
            
            const {data} = await axios({
                method: "GET",
                url
            })
            
            res.status(200).json({
                data: {
                    id: data.id,
                    description: data.alt_description,
                    image: data.urls.full,
                    user: {
                        id: data.user.id,
                        username: data.user.username,
                        profile_image: data.user.profile_image.medium,

                    }
                }
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || "Internal Server Error"
            })
        }
    }
}

module.exports = FetchApiController