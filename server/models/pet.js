const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: false },
    breed: { type: String, require: false },
    species: { type: String, require: true },
    gender: { type: String, require: false },
    age: { type: String, require: false },
    color: { type: String, require: true },
    weight: { type: String, require: false },
    location: { type: String, require: false },
    notes: { type: String, require: false },
    createdAt: { type: String, require: true }
});

module.exports = mongoose.model('pet', petSchema);