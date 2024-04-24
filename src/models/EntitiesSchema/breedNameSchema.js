const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreedNameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    species: {
        type: Schema.Types.ObjectId,
        ref: 'species',
        required: true,
    }
});


module.exports = BreedNameSchema;