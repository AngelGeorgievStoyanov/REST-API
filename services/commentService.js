const Comment = require('../models/Comment');

async function create(comment) {
    return Comment.create(comment)
}


async function getCommentsByTripId(tripId) {
    return Comment.find({ '_tripId': `${tripId}` })
}


async function deleteCommentById(id) {

    const existing = Comment.findById(id)

    if (existing) {
        return Comment.findByIdAndDelete(id)
    } else {
        throw new Error('Comment not found')


    }

}



async function deleteCommentByOwnerId(id) {

    const existing = Comment.find({ '_tripId': `${id}` })
    if (existing) {
        return Comment.deleteMany({ '_tripId': `${id}` })
    } else {
        throw new Error('Comment not found')


    }

}

async function getAllMyComments(ownerId) {

    const existing = Comment.find({ '_ownerId': `${ownerId}` })

    if (existing) {
        return existing
    } else {
        throw new Error('Comments not found')
    }

}





async function getCommentById(id) {
    const existing = Comment.findById(id)

    if (existing) {
        return existing
    } else {
        throw new Error('Comment not found')


    }
}

async function updateCommentById(id, comment) {


    const existing = await Comment.findById(id)

    existing.comment = comment.comment;

    return existing.save()
}


module.exports = {
    create,
    getCommentsByTripId,
    deleteCommentById,
    getCommentById,
    updateCommentById,
    deleteCommentByOwnerId,
    getAllMyComments
}