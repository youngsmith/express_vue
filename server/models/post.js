const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:{ type: String, require: true },
    title: { type: String, require: true },
    data: { type: String, required: true },
    createDate: { type: String, require: true },
    createTime: { type: String, require: true },
    petInfo: {
        name: { type: String, require: false },
        age: { type: Number, require: false },
        species: { type: String, require: true },
        breed: { type: String, require: false },
        gender: { type: String, require: false },
        color: { type: String, require: true },
        weight: { type: Number, require: false },
        location: { 
            lat: { type: Number, require: true },
            lng: { type: Number, require: true }
        },
        note: { type: String, require: false },
        time: { 
            year: { type: String, require: true },
            month: { type: String, require: true },
            day: { type: String, require: true },
            hour: { type: String, require: true },
            min: { type: String, require: true }
        }
    }
});

module.exports = mongoose.model('post', postSchema);