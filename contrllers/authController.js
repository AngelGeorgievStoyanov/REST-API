const authController = require('express').Router()
const { register, login } = require('../services/userService')

authController.post('/register', async (req, res) => {
    try {
        console.log(req.body.email, req.body.password)
        const token = await register(req.body.email, req.body.password);
        res.json(token);
    } catch (err) {
       
        res.status(400).json({
            message: console.error.message
        })
    }
})


authController.post('/login', async (req, res) => {
    try {
        const token = login(req.body.email, req.body.password)
        res.json(token)
    } catch (err) {
        res.status(401).json({
            message: console.error.message
        })
    }
})

authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
})

module.exports = authController