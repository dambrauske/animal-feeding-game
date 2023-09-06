const animals = [
    'https://i.pinimg.com/originals/ea/0b/4f/ea0b4f650ac9b2d868059e33020cbcf3.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/741.png',
    'https://preview.redd.it/6winzj651x261.png?auto=webp&s=805062c9e8c993f1fcb56e6ad56580d15bb66710',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5641cc0-b2e0-4728-8f19-54adc4509537/dfk9vz4-24bffd44-535c-41b7-8140-da64aef49439.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1NjQxY2MwLWIyZTAtNDcyOC04ZjE5LTU0YWRjNDUwOTUzN1wvZGZrOXZ6NC0yNGJmZmQ0NC01MzVjLTQxYjctODE0MC1kYTY0YWVmNDk0MzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2nyCDPXBgK1lIw7WPWeHPcfWQD3iFCRF4LWxTp0ank0',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png',
]


module.exports = {
    getAnimals: (req, res) => {
        res.send({error: false, data: animals, message: 'ok'})
    }
}
