const mongoose=require('mongoose')
const  Schema=mongoose.Schema;
const storyMultimediaSchema=new Schema({
    story_id:String,
    multimedia_id:String
})

module.exports=mongoose.model('StoryMultimedia',storyMultimediaSchema)