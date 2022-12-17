const commentController = require('express').Router()

const { create,getCommentsByTripId ,
    deleteCommentById, getCommentById,
    updateCommentById,deleteCommentByOwnerId,getAllMyComments} = require('../services/commentService')
const { parseError } = require('../util/parserErrors')



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
    try{

        const comment = await getCommentById(req.params.id)
        res.json(comment)
    }catch (error) {
        const message = parseError(error);
        res.status(404).json({ message })
    }
})



commentController.put('/:id', async(req,res)=>{

    const result = await updateCommentById(req.params.id,req.body)
    res.json(result)

})

commentController.delete('/trip/:id', async(req,res)=>{
    

    await deleteCommentByOwnerId(req.params.id)

    res.status(204).end()
})

commentController.get('/my-comments/:id', async (req, res) => {

    try {
        const comments = await getAllMyComments(req.params.id)
        res.json(comments)
    } catch (error) {
        const message = parseError(error);
        res.status(404).json({ message })
    }

})



module.exports = commentController