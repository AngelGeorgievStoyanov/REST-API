const dataController = require('express').Router()

const { create, getAll, getTripById, updateTripById } = require('../services/tripService')


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

dataController.get('/:id', async (req, res) => {
    const post = await getTripById(req.params.id)
    res.json(post)
})

dataController.put('/:id', async(req,res)=>{

    const result = await updateTripById(req.params.id,req.body)
    console.log(result)
    res.json(result)

})

module.exports = dataController