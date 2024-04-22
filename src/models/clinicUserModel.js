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
    alreadyTreated: {
        required: true,
        type: Boolean,
        default: false,
    },
    clinic_identifier: {
        type: String,
        required: true,
    },
    accountDetails: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        veterinarianName: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    petDetails: [
        {
            species: {
                type: String,
                required: true,
            },
            petName: {
                type: String,
                required: true,
            },
            sex: {
                type: String,
                required: true,
            },
            breed: {
                type: String,
                required: true,
            },
            sterilization_type: {
                type: String,
                required: true,
            },
            food_allergies: {
                type: String,
                required: true,
            },
            life_stage: {
                type: String,
                required: true,
            },
            body_condition: {
                type: String,
                required: true,
            },
            weight: {
                type: String,
                required: true,
            },
            activity_level: {
                type: String,
                required: true,
            },
            present_health: {
                type: String,
                required: true,
            },
            health_concerns: {
                type: String,
                required: true,
            },
            last_visit_to_vet: {
                type: String,
                required: true,
            },
            daily_food_intake: {
                type: String,
                required: true,
            },
            current_food_brand: {
                type: String,
                required: true,
            },
            pet_photo: {
                type: String,
                required: true,
            },
            daily_treat_feedings: {
                type: String,
                required: true,
            },
        },
    ],
});

const ClinicUser = mongoose.model('ClinicUser', clinicUserSchema);
module.exports = ClinicUser;