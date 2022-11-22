const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const secret = 'very_secret%%%%'

async function register(email, password) {
    const exsisting = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (exsisting) {
        throw new Error('Email is taken')
    }


    const user = await User.create({
        email,
        hashedPassword: bcrypt.hash(password, 10)
    })

    return     {
        _id:user._id,
        email:user.email,
       accessToken: createToken(user)
    };

}

async function login(email, password) {

} async function logout() {

}


function createToken(user) {

    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, secret)
    return token;
}


module.export = {
    register,
    login,
    logout
}