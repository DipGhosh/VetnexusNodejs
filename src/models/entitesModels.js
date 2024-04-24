const mongoose = require("mongoose");

const BreedSchema = require("./EntitiesSchema/breedSchema");
const SpeciesSchema = require("./EntitiesSchema/speciesSchema");
const BreedNameSchema = require("./EntitiesSchema/breedNameSchema");
const AgeSchema = require("./EntitiesSchema/ageSchema");
const weightSchema = require("./EntitiesSchema/weightSchema");
const MaladiesSchema = require("./EntitiesSchema/maladiesSchema");
const ActivitySchema = require("./EntitiesSchema/activitySchema");

const speciesModel = mongoose.model('species', SpeciesSchema);
const breedModel = mongoose.model('breed', BreedSchema);
const breedNameModel = mongoose.model('breedName', BreedNameSchema);
const ageModel = mongoose.model('age', AgeSchema);
const weightModel = mongoose.model('weight', weightSchema);
const maladiesModel = mongoose.model('maladies', MaladiesSchema);
const activityModel = mongoose.model('activity', ActivitySchema);

module.exports = { breedModel, speciesModel, breedNameModel, ageModel, weightModel, maladiesModel, activityModel };