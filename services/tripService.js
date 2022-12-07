const Trip = require('../models/Trip');


async function create(trip) {
    return Trip.create(trip)
}

async function getAll() {
    return Trip.find()
}

async function getTripById(id) {
    return Trip.findById(id)
}

async function updateTripById(id, trip) {


    const existing = await Trip.findById(id)

    existing.name = trip.name;
    existing.description = trip.description;
    existing.imageUrl = trip.imageUrl

    return existing.save()
}


async function deleteTrypById(id){
    return Trip.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getTripById,
    updateTripById,
    deleteTrypById
}