const Trip= require('../models/Trip');


async function create(trip){
    return Trip.create(trip)
}

async function getAll(){
    return Trip.find()
}

module.exports={
    create,
    getAll
}