const { activityModel, ageModel, breedModel, breedNameModel, maladiesModel, speciesModel, weightModel } = require("../models/entitesModels");
const { failedResponse } = require("./responses");


function entitySchemaSelector(req, res, next) {
    const { type } = req.params
    console.log(type);
    switch (type) {
        case "species":
            req.model = speciesModel
            next()
            break;
        case "breed":
            req.model = breedModel;
            next()
            break;
        case "breedName":
            req.model = breedNameModel;
            next()
            break;
        case "age":
            req.model = ageModel;
            next()
            break;
        case "weight":
            req.model = weightModel;
            next()
            break;
        case "maladies":
            req.model = maladiesModel;
            next()
            break;
        case "activity":
            req.model = activityModel;
            next()
            break;
        default:
            res.send(failedResponse({ message: `Model With type = ${type} not found.` }))
    }
}
module.exports = entitySchemaSelector