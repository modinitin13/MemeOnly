const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userstorySchema = new Schema({
    story_id:String,
    user_id:String
});

module.exports = mongoose.model("UserStoryLike", userstorySchema);
