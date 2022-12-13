const tripController = require('express').Router()

const { create, getAll, getTripById, updateTripById, deleteTrypById } = require('../services/tripService')


tripController.get('/', async (req, res) => {

    const trips = await getAll()

    res.json(trips)

})


tripController.post('/', async (req, res) => {
   
    const data = Object.assign( req.body)
    const trip = await create(data)
  
    res.json(trip)
})

tripController.get('/:id', async (req, res) => {
    const post = await getTripById(req.params.id)
    console.log(post)
    res.json(post)
})

tripController.put('/:id', async(req,res)=>{

    const result = await updateTripById(req.params.id,req.body)
    console.log(result)
    res.json(result)

})

tripController.delete('/:id', async(req,res)=>{
    

     await deleteTrypById(req.params.id)

     res.status(204).end()
})

module.exports = tripController