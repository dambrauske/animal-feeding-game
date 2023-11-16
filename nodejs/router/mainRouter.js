const express = require('express')
const router = express.Router()

const {
    getAnimals,
    getAnimal,
    playWithAnimal,
    sellEgg,
    feedAnimal,
    createUser
} = require('../controllers/mainController')


router.get('/animals', getAnimals)
router.post('/play', playWithAnimal)
router.get('/animal/:id', getAnimal)
router.post('/feed', feedAnimal)
router.post('/sellEgg', sellEgg)

router.get('addUser', createUser)

module.exports = router
