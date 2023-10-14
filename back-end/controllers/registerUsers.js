const express = require('express');
const route = express.Router()
route.use(express.json())


route.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = route;