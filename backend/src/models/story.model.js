const {Schema, model}= require('mongoose')

const storyScherma = new storySchema({
    title: String,
    description:String,
    scores:[{
        name: String,
        number: Number
    }]

})

module.exports = model('story', storyScherma)




