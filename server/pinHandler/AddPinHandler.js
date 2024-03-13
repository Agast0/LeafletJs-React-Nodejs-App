const fs = require('fs');
const path = require('path');
const pinsFilePath = require('./PinsFilePath');
const logger = require("../logger/logger");

const handleAddPin = ({ lat, lng, datetime }) => {
    let pins = [];

    if (fs.existsSync(pinsFilePath)) {
        try {
            const pinsData = fs.readFileSync(pinsFilePath);
            pins = JSON.parse(pinsData);
        } catch (error) {
            logger.error("Error reading pins file:", error);
            return { err: error, result: null };
        }
    }

    // Generate a unique ID for the new pin
    const newPinId = pins.length > 0 ? pins[pins.length - 1].id + 1 : 0;

    // Create new pin object
    const newPin = {
        id: newPinId,
        lat,
        lng,
        datetime
    };

    // Add the new pin to the pins array
    pins.push(newPin);

    try {
        fs.writeFileSync(pinsFilePath, JSON.stringify(pins, null, 2));
    } catch (error) {
        logger.error('Error writing pins file:', error);
        return { err: error, result: null };
    }

    logger.info(`Pin added successfully: ${JSON.stringify(newPin)}}`);
    return { err: null, result: newPin };
};

module.exports = { handleAddPin };
