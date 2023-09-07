const animalImages = [
    'https://i.pinimg.com/originals/ea/0b/4f/ea0b4f650ac9b2d868059e33020cbcf3.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/741.png',
    'https://preview.redd.it/6winzj651x261.png?auto=webp&s=805062c9e8c993f1fcb56e6ad56580d15bb66710',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5641cc0-b2e0-4728-8f19-54adc4509537/dfk9vz4-24bffd44-535c-41b7-8140-da64aef49439.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1NjQxY2MwLWIyZTAtNDcyOC04ZjE5LTU0YWRjNDUwOTUzN1wvZGZrOXZ6NC0yNGJmZmQ0NC01MzVjLTQxYjctODE0MC1kYTY0YWVmNDk0MzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2nyCDPXBgK1lIw7WPWeHPcfWQD3iFCRF4LWxTp0ank0',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png',
]

const getHunger = () => Math.floor(Math.random() * 4)

class Animals {

    list = []

    hungerIntervals = {}
    hatchingIntervals = {}

    constructor() {
        this.list = animalImages.map(image => {
            return {
                date: new Date().getTime(),
                image: image,
                id: Math.random().toString(),
                hunger: 100,
                money: 10,
                eggProgress: 0,
                eggs: [1],
            }
        })
    }

    getAnimal(animalId) {
        return this.list.find(animal => animal.id === animalId)
    }

    startHunger(animalId) {
        const animal = this.list.find(animal => animal.id === animalId)

        if (!this.hungerIntervals[animalId]) {
            this.hungerIntervals[animalId] = setInterval(() => {
                const hungerAfterTick = animal.hunger - getHunger()

                if (hungerAfterTick <= 0) {
                    clearInterval(this.hungerIntervals[animalId])
                    clearInterval(this.hatchingIntervals[animalId])
                    this.hungerIntervals[animalId] = undefined
                    this.hatchingIntervals[animalId] = undefined
                    animal.hunger = 0
                } else {
                    animal.hunger = hungerAfterTick
                }

                console.log(animal.hunger)

            }, 1_000)
        }

        return animal
    }

    startHatching(animalId) {
        const animal = this.getAnimal(animalId)

        if (!this.hatchingIntervals[animalId]) {
            this.hatchingIntervals[animalId] = setInterval(() => {
                const random = Math.floor(Math.random() * 20) + 1

                const eggProgressAfterTick = animal.eggProgress + random

                if (eggProgressAfterTick >= 100) {
                    animal.eggProgress = 0
                    animal.eggs.push(1)
                } else {
                    animal.eggProgress = eggProgressAfterTick
                }


            }, 1_000)
        }

        return animal
    }

    sellEgg(animalId) {
        const animal = this.list.find(animal => animal.id === animalId)
        animal.eggs.pop()
        animal.money += 5
        return animal
    }

    feedAnimal(animalId) {
        const animal = this.list.find(animal => animal.id === animalId)
        const random = Math.floor(Math.random() * 5) + 3

        if (animal.money >= 10) {
            animal.money -= 10
            animal.hunger += random
        }
        return animal
    }


}


module.exports = new Animals()
