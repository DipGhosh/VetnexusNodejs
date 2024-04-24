const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaladiesSchema = new Schema({
    maladies: {
        type: String,
        required: true,
    },
});


module.exports = MaladiesSchema;