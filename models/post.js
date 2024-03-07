const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Post Schema
const postSchema = new Schema({
    content: {
        type: String,
        required: true
    }, 
    tags: {
        type: [String]
    },
    image: {
        type: String,
    },
    cloudinary_id: {
        type: String
    }, 
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    likes: [String]
})

module.exports = mongoose.model('Post', postSchema);