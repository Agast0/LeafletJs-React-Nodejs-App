const Joi = require('joi');
const {handleAddPin} = require("../pinHandler/AddPinHandler");
const {handleRemovePin} = require("../pinHandler/RemovePinHandler");
const logger = require("../logger/logger");

const pinIdSchema = Joi.number().integer().min(0).required();

const removePinValidator = (req, res) => {
    const { error } = pinIdSchema.validate(req.params.id);
    if (error) {
        logger.warn(`Validation error: ${error.details[0].message}`);
        return res.status(400).json({ error: error.details[0].message });
    }

    const {result, err} = handleRemovePin(req.params.id);
    if (err == null && result == null) {
        return res.status(404).json({ error: `Pin with ID ${req.params.id} not found` });
    } else if (err == null) {
        return res.status(200).json(result);
    } else {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = { removePinValidator };