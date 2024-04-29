
var express = require('express');
const { validateBody } = require('../middlewares/validateBody');
const entitySchemaSelector = require('../utils/entitySchemaSelector');
const { createEntity, validateEntitySchema } = require('../controllers/entityController');
var entityRouter = express.Router();

/*  All routes for the entities. 
    This entities are used to get the dropdown values for the form fields
    and are configured in the intern database.
*/
entityRouter.post("/create/:type", entitySchemaSelector, validateEntitySchema, createEntity)

module.exports = entityRouter;
