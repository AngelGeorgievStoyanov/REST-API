const Trip = require('../models/Trip');


async function create(trip) {
    return Trip.create(trip)
}

async function getAll() {
    return Trip.find()
}

async function getTripById(id) {


    const existing = Trip.findById(id)
    if (existing) {
        return existing
    } else {
        throw new Error('Trip not found')

    }
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
    existing.likes = trip.likes;
    existing.price=trip.price;

    return existing.save()
}


async function deleteTrypById(id) {
    return Trip.findByIdAndDelete(id)
}

async function getAllMyTrips(ownerId) {
    const existing = Trip.find({ '_ownerId': `${ownerId}` })
 
    if (existing) {
        return existing
    } else {
        throw new Error('Trips not found')


    }
}


async function getTop(){
    return Trip.find()
}

module.exports = {
    create,
    getAll,
    getTripById,
    updateTripById,
    deleteTrypById,
    getAllMyTrips,
    getTop
}