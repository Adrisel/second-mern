const {Router} = require('express')
const router = Router()
const {getCard,postCard,getCardId,putCard,deleteCard} = require('../controllers/cards.controllers')

router.route('/')
.get(getCard)
.post(postCard)

router.route('/:id')
.get(getCardId)
.put(putCard)
.delete(deleteCard)


module.exports = router