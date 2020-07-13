const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const useruserSchema = new Schema({
    user_id1:String,
    user_id2:String
});

module.exports = mongoose.model("UserUser", useruserSchema);
