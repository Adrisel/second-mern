const {Router} = require('express')
const router = Router()
const { getLogin, postLogin, getLoginId, putLogin, deleteLogin}=require('../controllers/login.controllers')

router.route('/')
.get(getLogin)
.post(postLogin)

router.route('/:id')
.get(getLoginId)
.put(putLogin)
.delete(deleteLogin)

module.exports = router