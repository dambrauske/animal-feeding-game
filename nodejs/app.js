const express = require('express')
const app = express()
const cors = require('cors')
const router= require('./router/mainRouter')
const mongoose = require('mongoose')

require('dotenv').config()

const animals = require('./animals')


mongoose.connect(process.env.DB_KEY)
    .then(() => {
        console.log('connection successful')
    }).catch(e => {
    console.log('error', e)
})

app.locals.animals = animals

app.use(cors())
app.use(express.json())
app.use('/', router)


const port = 8000
app.listen(port)

