const cardsctrl={}

cardsctrl.getCard = (req,res)=>{res.json({message: 'received'})}
cardsctrl.postCard = (req,res)=>{res.json({message: 'Card showed'})}
cardsctrl.getCardId = (req,res)=>{res.json({message: 'adriana'})}
cardsctrl.putCard=(req,res)=>{res.json({message: 'card updated'})}
cardsctrl.deleteCard=(req,res)=>{res.json({message: 'card eliminada'})}

module.exports = cardsctrl