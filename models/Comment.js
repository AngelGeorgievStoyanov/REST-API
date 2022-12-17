const { Schema, model, Types: { ObjectId } } = require('mongoose')


const userSchema = new Schema({

    nameAuthor: { type: String },
    tripTitle: { type: String },
    comment: { type: String },
    _tripId: { type: ObjectId, ref: 'Trip', required: true },
    _ownerId: { type: ObjectId, ref: 'User', required: true }


});


const Comment = model('Comment', userSchema)

module.exports = Comment; 