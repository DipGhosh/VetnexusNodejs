const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    weight: {
        type: String,
        required: true,
        unique: true,
    }
});


module.exports = weightSchema;