"use strict"
const axios = require('axios')

const FetchApiRouter = require('express').Router();

FetchApiRouter.get('/photos', async function(req,res) {
    try {
        let url = "https://api.unsplash.com/photos/?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s"
        const data = await axios({
            method: 'GET',
            url: url
        });
        console.log(url)

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
})

FetchApiRouter.get('/collection', async function(req,res) {
    try {
        let url = "https://api.unsplash.com/collections/?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s"
        const data = await axios({
            method: 'GET',
            url: url
        });
        console.log(url)

        res.send(data.data)
    } catch (error) {
        res.status(500).json({
            message: error.message || "internal server error"
        })
    }
})

module.exports = FetchApiRouter