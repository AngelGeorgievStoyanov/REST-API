const commentController = require('express').Router()

const { create,getCommentsByTripId ,deleteCommentById} = require('../services/commentService')

commentController.post('/', async (req, res) => {
 
    const data = Object.assign( req.body)
    const comment = await create(data)
  
    res.json(comment)
})

commentController.get('/trip/:id', async (req, res) => {
   

    const comments = await getCommentsByTripId(req.params.id)
  
    res.json(comments)
})


commentController.delete('/:id', async(req,res)=>{
    

    await deleteCommentById(req.params.id)

    res.status(204).end()
})

module.exports = commentController