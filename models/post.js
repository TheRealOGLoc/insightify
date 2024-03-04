const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
})

const likeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
})

const postSchema = new Schema({
    content: {
        type: String,
        required: true
    }, 
    tags: {
        type: [String]
    },
    likes: {
        type: [likeSchema]
    },
    comment: {
        type: [commentSchema]
    },
    cloudinary_id: {
        type: String
    },
    userName: {
        type: String,
    },
    googleID: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    userAvatar: {
        type: String
    }
    }, {
        timestamps: true
})


const postSchemaTest = new Schema({
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
    }
})

module.exports = mongoose.model('Post', postSchemaTest);