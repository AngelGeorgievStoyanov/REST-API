const tripController = require('express').Router()

const { create, getAll,
    getTripById, updateTripById,
    deleteTrypById, getAllMyTrips,
    getTop } = require('../services/tripService')
const { parseError } = require('../util/parserErrors')




tripController.get('/top', async (req, res) => {


    const trips = await getTop()

    let sort = trips.sort((a, b) => b.likes.length - a.likes.length)

    if (sort.length > 5) {
        sort = sort.slice(0, 5)
    }

    res.json(sort)

})

tripController.get('/', async (req, res) => {

    const trips = await getAll()

    res.json(trips)

})


tripController.post('/', async (req, res) => {
    try {

        const data = Object.assign(req.body)
        const trip = await create(data)

        res.json(trip)
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message })
    }
})

tripController.get('/:id', async (req, res) => {
    try {

        const post = await getTripById(req.params.id)
        res.json(post)
    } catch (error) {
        const message = parseError(error);
        res.status(404).json({ message })
    }
})

tripController.put('/:id', async (req, res) => {

    const existing = await getTripById(req.body.id)

    try {
        const result = await updateTripById(req.params.id, req.body)
        res.json(result)
    } catch (error) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

})

tripController.delete('/:id', async (req, res) => {



    try {

        await deleteTrypById(req.params.id)

        res.status(204).end()
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
})

tripController.get('/my-trips/:id', async (req, res) => {

    try {
        const trips = await getAllMyTrips(req.params.id)

        res.json(trips)
    } catch (error) {
        const message = parseError(error);

        res.status(404).json({ message })
    }

})





module.exports = tripController