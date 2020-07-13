const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const storySchema = new Schema({
    story_caption:String,
    story_likes: Number,
    story_category: String,
    story_is_single: Boolean,
    story_author_id: String,
    story_created_at: String,
});

module.exports = mongoose.model("Story", storySchema);
