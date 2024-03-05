const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    creater: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, {
        timestamps: true
})

module.exports = Schema.module("Like", likeSchema);