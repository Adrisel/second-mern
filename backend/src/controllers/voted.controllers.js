const votedctrl = {}

votedctrl.getVote = (req,res)=>{res.json({message: 'received'})}
votedctrl.postVote=(req,res)=>{res.json({message: 'voted showed'})}
votedctrl.getVoteId= (req,res)=>{res.json({message: 'adriana'})}
votedctrl.putVote= (req,res)=>{res.json({message: 'voted updated'})}
votedctrl.deleteVote=(req,res)=>{res.json({message: 'voted eliminada'})}

module.exports = votedctrl