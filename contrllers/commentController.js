const commentController = require('express').Router()

const { create } = require('../services/commentService')

commentController.post('/', async (req, res) => {
   console.log(req.body)
    const data = Object.assign( req.body)
    const comment = await create(data)
  
    res.json(comment)
})

module.exports = commentController