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


async function getCommentById(id) {
    console.log(id,'-----')
    return Comment.findById(id)
}

async function updateCommentById(id, comment) {


    const existing = await Comment.findById(id)

    existing.comment = comment.comment;
    
    return existing.save()
}


module.exports={
    create,
    getCommentsByTripId,
    deleteCommentById,
    getCommentById,
    updateCommentById
}