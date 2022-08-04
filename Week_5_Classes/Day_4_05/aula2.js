/* npm i axios

create a folder called services and inside create api.service.js
inside of this file,

const axios = require('axios')

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-crud.api.herokuapp.com',
        });
    }

    getAllCharacters = () => {
        return this.api.get(`/characters`)
    }

    getOneCharacter = (id) => {
        return this.api.get(`/characters/:{id}`)
    }

    createCharacter = (character) => {
        return this.api.post(`/characters`, character)
    }

    editCharacter = (id, updatedInfo) => {
        return this.api.put(`/characters/${id}`, updatedInfo)
    }

    deleteOneCharacter = (id) => {
        return this.api.delete(`/characters/:{id}`)
    }

} 

module.exports = ApiService;



depois disso, criamos o character.router.js no routes

const router = require('express').Router();
const ApiService = require('./services/api.service');


// Our route, from our own API/server

// get all characters
router.get('/characters', (req, res, next) => {
    characterApi.getAllCharacters()
    .then((response) => {
        res.json(response.data);
    });
})




module.exports = router;


lembrar que temos que adicionar no app.js cada file

const characterRoutes



*/