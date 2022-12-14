const commentController = require('express').Router()

const { create,getCommentsByTripId ,deleteCommentById, getCommentById,updateCommentById} = require('../services/commentService')

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
commentController.get('/:id', async (req, res) => {
    const comment = await getCommentById(req.params.id)
    console.log(comment)
    res.json(comment)
})

commentController.put('/:id', async(req,res)=>{

    const result = await updateCommentById(req.params.id,req.body)
    console.log(result)
    res.json(result)

})

module.exports = commentController