const {Router} = require('express')
const router = Router()

router.route('/')
.get((req,res)=>{res.json({message: 'received'})})
.post((req,res)=>{res.json({message: 'result showed'})})

router.route('/:id')
.get((req,res)=>{res.json({message: 'adriana'})})
.put((req,res)=>{res.json({message: 'result updated'})})
.delete((req,res)=>{res.json({message: 'result eliminada'})})

module.exports = router