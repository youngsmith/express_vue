const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:{ type: String, require: true },
    title: { type: String, require: true },
    data: { type: String, required: true },
    createDate: { type: String, require: true },
    createTime: { type: String, require: true }
});

module.exports = mongoose.model('post', postSchema);