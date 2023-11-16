

const userDb = require('../schemas/userSchema')


module.exports = {
    getAnimals: (req, res) => {
        res.send({error: false, data: req.app.locals.animals.list, message: 'ok'})
    },
    getAnimal: (req, res) => {
        const {id} = req.params
        res.json({error: false, data: req.app.locals.animals.getAnimal(id), message: 'Hunger fetched'})
    },
    playWithAnimal: (req, res) => {
        const {id} = req.body
        const animal = req.app.locals.animals.startHunger(id)
        req.app.locals.animals.startHatching(id)

        res.json({error: false, data:animal, message: 'Hunger interval initialized'})
    },

    sellEgg: (req, res) => {
        const {id} = req.body
        const animal = req.app.locals.animals.sellEgg(id)

        res.json({error: false, data: animal, message: 'Egg sold'})

    },
    feedAnimal: (req, res) => {
        const {id} = req.body
        const animal = req.app.locals.animals.feedAnimal(id)

        res.json({error: false, data: animal, message: 'Animal fed'})
    },

    createUser: (req, res) => {
        const newUser = {
            username: 'Ugne',
            city: 'Vilnius',
            age: 30,
        }

        const user = new userDb({
            username: newUser.username,
            city: newUser.city,
            age: newUser.city
        })

        user.save().then(() => {
            console.log('user saved')

            res.send({ok: 'ok'})
        }).catch(e => {
            console.log('error', e)
        })
    }

}
