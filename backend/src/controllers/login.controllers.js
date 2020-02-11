const loginctrl={}

const room = require('../models/room.model')

loginctrl.getLogin = (req,res)=>{
    res.json({message: 'received'
})}
loginctrl.postLogin = (req,res)=>{res.json({message: 'logged showed'})}
loginctrl.getLoginId=(req,res)=>{res.json({message: 'adriana'})}
loginctrl.putLogin = (req,res)=>{res.json({message: 'login updated'})}
loginctrl.deleteLogin = (req,res)=>{res.json({message: 'login deleted'})}



module.exports = loginctrl