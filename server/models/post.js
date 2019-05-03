const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: String, required: true },
    createdAt: { type: String, require: true }
});

module.exports = mongoose.model('post', postSchema);