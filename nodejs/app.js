const express = require('express')
const app = express()
const cors = require('cors')
const router= require('./router/mainRouter')
const animals = require('./animals')

app.locals.animals = animals

app.use(cors())
app.use(express.json())
app.use('/', router)


const port = 8000
app.listen(port)

