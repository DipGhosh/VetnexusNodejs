const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const healthProfile = {
    age_range: {
        type: String,
        required: false,
    },
    wight_range: {
        type: String,
        required: false,
    },
    daily_activity: {
        type: String,
        required: false,
    },
    health_condition: {
        type: String,
        required: false,
    },
}

const BreedSchema = new Schema({
    basicDetails: {
        breed: {
            type: String,
            required: false,
        },
        group: {
            type: String,
            required: false,
        },
        clade: {
            type: String,
            required: false,
        },
    },
    behavior_characteristics: {
        temperament: {
            type: String,
            required: false,
        },
        training_level: {
            type: String,
            required: false,
        },
        traits: {
            type: String,
            required: false,
        },
    },
    ideal_health: {
        puppy: healthProfile,
        adult: healthProfile,
        senior: healthProfile
    },
    pet_ancestry: {
        type: String,
    },
    additional_info: {
        type: String,
    },
    image: {
        type: String,
    },
}

);

module.exports = BreedSchema;