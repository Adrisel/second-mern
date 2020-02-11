const {Schema,model}=require('mongoose')

new userSchema({
    name: {type: String, required:true, unique:true}
})