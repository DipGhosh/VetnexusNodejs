const { failedResponse } = require("../utils/responses");

const validateBody = (schema) => {
    return async (req, res, next) => {
        try {
            const validationResult = await schema.validate(req.body);
            if (validationResult.error) {
                console.log(validationResult.error);
                console.log(failedResponse({ message: validationResult.error.details[0].message }));
                return res.status(400).json(failedResponse({ message: validationResult.error.details[0].message }));
            }
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
};
module.exports = { validateBody };