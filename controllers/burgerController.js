const router = require('express').Router()
const burger = require('../models/burger.js')
const user = require('../models/burger.js')


router.get('/burgers', (req, res) => 
    burger.getAll(burger => 
    res.render('index', { burger })))

router.post('/burgers', (req, res) => 
    burger.create(req.body, () => 
    res.sendStatus(200)))

router.put('/burgers/:id', (req, res) => 
    burger.update(req.body, req.params.id, () => 
    res.sendStatus(200)))

router.delete('/burgers/:id', (req, res) => 
    burger.delete(req.params.id, () => 
    res.sendStatus(200)))

module.exports = router
