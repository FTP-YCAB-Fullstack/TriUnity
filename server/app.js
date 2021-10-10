"use strict"

const express = require('express')
const router = require('./routes')

const app = express()
const port = 3500

app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`server running ${port}`))