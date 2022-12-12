const { Schema, model, Types: { ObjectId } } = require('mongoose')


const userSchema = new Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    transport: { type: String,enum: ['Car', 'Bus', 'Aircraft', 'Another type']  },
    countPeoples: { type: Number },
    typeOfPeople: { type: String, enum: ['Family', 'Family with children', 'Friends', 'Another type'] },
    destination: { type: String },
    imageUrl: { type: String },
    coments: [{ type: ObjectId, ref: 'User', default: [] }],
    likes: [{ type: ObjectId, ref: 'User', default: [] }],
    _ownerId: { type: ObjectId, ref: 'User', required: true }


});


const Trip = model('Trip', userSchema)

module.exports = Trip; 