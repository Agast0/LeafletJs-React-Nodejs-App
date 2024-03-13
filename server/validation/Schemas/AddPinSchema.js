const Joi = require('joi');

const addPinSchema = Joi.object({
    lat: Joi.string().required(),
    lng: Joi.string().required(),
    datetime: Joi.string().isoDate().required()
});

module.exports = { addPinSchema };
