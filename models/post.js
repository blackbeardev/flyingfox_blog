var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    date: String,
    image: String,
    content: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }    
    ]
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;