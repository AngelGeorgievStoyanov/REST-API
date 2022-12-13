const commentController = require('express').Router()

const { create } = require('../services/commentService')

commentController.post('/', async (req, res) => {
   
    const data = Object.assign( req.body)
    const comment = await create(data)
  
    res.json(comment)
})

module.exports = commentController