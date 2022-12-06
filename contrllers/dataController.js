const dataController = require('express').Router()

const { create, getAll } = require('../services/tripService')


dataController.get('/', async (req, res) => {

    const trips = await getAll()

    res.json(trips)

})


dataController.post('/', async (req, res) => {
    console.log(req.body)
    const data = Object.assign(req.body)
    const trip = await create(data)
    console.log(trip)
    res.json(trip)
})

module.exports = dataController