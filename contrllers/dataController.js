const dataController = require('express').Router()

const { create, getAll, getTripById, updateTripById, deleteTrypById } = require('../services/tripService')


dataController.get('/', async (req, res) => {

    const trips = await getAll()

    res.json(trips)

})


dataController.post('/', async (req, res) => {
   
    const data = Object.assign( req.body)
    const trip = await create(data)
  
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

dataController.delete('/:id', async(req,res)=>{
    

     await deleteTrypById(req.params.id)

     res.status(204).end()
})

module.exports = dataController