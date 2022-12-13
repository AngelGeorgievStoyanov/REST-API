const Comment = require('../models/Comment');

async function create(comment) {
    return Comment.create(comment)
}

module.exports={
    create
}