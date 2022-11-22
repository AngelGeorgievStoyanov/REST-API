const authController = require('express').Router()
const { register } = require('../services/userService')

authController.post('/register', async (req, res) => {
    try {
        const token = register(req.body.email, req.body.password)
        res.json(token)
    } catch (err) {
        res.status(400).json({
            message: console.error.message
        })
    }
})

module.exports={
    authController
}