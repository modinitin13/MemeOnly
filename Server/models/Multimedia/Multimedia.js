const mongoose=require('mongoose')
const Schema=mongoose.Schema
const multimediaSchema= new Schema({
    multimedia_type:String,
    multimedia_url:String
})

module.exports=mongoose.model('Multimedia',multimediaSchema)