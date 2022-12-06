const dataController = require('express').Router()

const { create } = require('../services/tripService')


dataController.get('/', (req, res) => {
    res.json([])
})


dataController.post('/', async (req, res) => {
    console.log(req.body)
    const data = Object.assign(req.body)
    const trip = await create(data)
    console.log(trip)
    res.json(trip)
})

module.exports = dataController