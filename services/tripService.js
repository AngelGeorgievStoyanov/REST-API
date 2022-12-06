const Trip= require('../models/Trip');


async function create(trip){
    return Trip.create(trip)
}

module.exports={
    create
}