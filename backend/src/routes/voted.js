const {Router} = require('express')
const router = Router()
const {getVote, postVote, getVoteId, putVote,deleteVote } = require('../controllers/voted.controllers')

router.route('/')
.get(getVote)
.post(postVote)

router.route('/:id')
.get(getVoteId)
.put(putVote)
.delete(deleteVote)

module.exports = router