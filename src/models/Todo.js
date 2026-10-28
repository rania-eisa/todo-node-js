const mongoose=require('mongoose')
const todoshema=new mongoose.Schema({
    title:
    {
        type:String,required:true
    },
    completed:{
        type:Boolean,default:false
    },createdat:
    {
        type:Date,default:Date.now
    }
},{timeStamps:true})
const todo=mongoose.model('Todo',todoshema)
module.exports=todo