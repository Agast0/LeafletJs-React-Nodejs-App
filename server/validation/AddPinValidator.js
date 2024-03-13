const { addPinSchema } = require("./Schemas/AddPinSchema");
const { handleAddPin } = require("../pinHandler/AddPinHandler");
const logger = require("../logger/logger");

const addPinValidator = (req, res) => {
    const { error } = addPinSchema.validate(req.body);
    if (error) {
        logger.warn(`Validation error: ${error.details[0].message}`);
        return res.status(400).json({ error: error.details[0].message });
    }

    const { result, err } = handleAddPin(req.body);
    if (err === null) {
        return res.status(200).json(result);
    } else {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = { addPinValidator };
