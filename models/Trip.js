const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String  },
   
});


const Trip = model('Trip', userSchema)

module.exports = Trip; 