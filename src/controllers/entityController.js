const { validateBody } = require("../middlewares/validateBody")
const { successResponse, failedResponse } = require("../utils/responses")

module.exports = {
    validateEntitySchema: async (req, res, next) => {
        const model = req.model
        try {
            const validationResult = await model.validate(req.body);
            if (validationResult.error) {
                console.log(validationResult.error);
                console.log(failedResponse({ message: validationResult.error.details[0].message }));
                return res.status(400).json(failedResponse({ message: validationResult.error.details[0].message }));
            }
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    createEntity: async (req, res) => {
        const model = req.model
        try {
            await model.create(req.body)
            res.send(successResponse({ message: "created successfully" }))
        } catch (error) {
            console.log(error)
            res.send(failedResponse({ message: error?.errorResponse?.errmsg || "Failed to create " }))
        }
    }
}