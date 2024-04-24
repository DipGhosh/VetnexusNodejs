const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgeSchema = new Schema({
    life_stage: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: String,
        required: true,
    }
});


module.exports = AgeSchema;