const Trip= require('../models/Trip');


async function create(trip){
    return Trip.create(trip)
}

async function getAll(){
    return Trip.find()
}

async function getPostById(id){
    return Trip.findById(id)
}

module.exports={
    create,
    getAll,
    getPostById
}