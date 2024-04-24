const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpeciesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});


module.exports = SpeciesSchema;