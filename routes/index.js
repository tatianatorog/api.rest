//routes

const { Router } = require('express')
const router = Router();

router.get('/test', (req, res) => {
    const data ={
        "name": "tatiana",
        "website": "hola",
    }
    res.json(data)
});

module.exports =  router ;