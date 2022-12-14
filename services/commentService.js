const Comment = require('../models/Comment');

async function create(comment) {
    return Comment.create(comment)
}


async function getCommentsByTripId(tripId){
   return Comment.find({'_tripId': `${tripId}`})
}


async function deleteCommentById(id){
    return Comment.findByIdAndDelete(id)
}



module.exports={
    create,
    getCommentsByTripId,
    deleteCommentById
}