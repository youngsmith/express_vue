const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:{ type: String, require: true },
    title: { type: String, require: true },
    data: { type: String, required: true },
    createDate: { type: String, require: true },
    createTime: { type: String, require: true },
    pet: {
        name: { type: String, require: false },
        breed: { type: String, require: false },
        species: { type: String, require: true },
        gender: { type: String, require: false },
        age: { type: Number, require: false },
        color: { type: String, require: true },
        weight: { type: Number, require: false },
        location: { type: String, require: true }
    }
});

module.exports = mongoose.model('post', postSchema);