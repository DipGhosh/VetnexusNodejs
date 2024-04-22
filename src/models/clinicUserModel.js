const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinicUserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const ClinicUser = mongoose.model('ClinicUser', clinicUserSchema);
module.exports = ClinicUser;