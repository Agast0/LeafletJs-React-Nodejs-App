const fs = require('fs');
const path = require('path');
const pinsFilePath = require('./PinsFilePath')
const logger = require("../logger/logger");

const handleRemovePin = (pinId) => {
    let pins = [];

    // Load existing pins from JSON file
    try {
        const pinsData = fs.readFileSync(pinsFilePath);
        pins = JSON.parse(pinsData);
    } catch (error) {
        logger.error("Error reading pins file:", error);
        return { err: error, result: null };
    }

    // Find the index of the pin with the specified ID
    const pinIndex = pins.findIndex(pin => pin.id === parseInt(pinId));
    if (pinIndex === -1) {
        logger.info(`Pin with ID ${pinId} not found`)
        return { err: null, result: null };
    }

    // Remove the pin from the pins array
    const removedPin = pins.splice(pinIndex, 1)[0];

    // Write updated pins array back to JSON file
    try {
        fs.writeFileSync(pinsFilePath, JSON.stringify(pins, null, 2));
    } catch (error) {
        logger.error("Error writing pins file:", error);
        return { err: error, result: null };
    }

    logger.info(`Pin with ID ${pinId} removed successfully`)

    return { err: null, result: removedPin };
};

module.exports = { handleRemovePin };
