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

    existing.title = trip.title;
    existing.description = trip.description;
    existing.imageUrl = trip.imageUrl;
    existing.typeOfPeople = trip.typeOfPeople;
    existing.transport = trip.transport;
    existing.destination = trip.destination;
    existing.countPeoples = trip.countPeoples;
    existing.likes=trip.likes

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