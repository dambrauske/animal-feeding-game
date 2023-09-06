const express = require('express')
const router = express.Router()

const {
    getAnimals
} = require('../controllers/mainController')


router.get('/getAnimals', getAnimals)

module.exports = router
