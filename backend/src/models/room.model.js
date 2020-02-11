const {Schema , model}=require('mongoose')

const roomSchema=new Schema({
    name: String,
    roomId: {type=String, required=true}
})

module.exports = model('room', roomSchema)