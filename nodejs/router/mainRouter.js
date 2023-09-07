const express = require('express')
const router = express.Router()

const {
    getAnimals,
    getAnimal,
    playWithAnimal,
    sellEgg,
    feedAnimal,
} = require('../controllers/mainController')


router.get('/animals', getAnimals)
router.post('/play', playWithAnimal)
router.get('/animal/:id', getAnimal)
router.post('/feed', feedAnimal)
router.post('/sellEgg', sellEgg)

module.exports = router
