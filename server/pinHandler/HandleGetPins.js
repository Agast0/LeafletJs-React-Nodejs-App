const fs = require('fs');
const path = require('path');
const pinsFilePath = require('./PinsFilePath')
const logger = require("../logger/logger");

const handleGetPins = () => {
    try {
        // Check if pins file exists
        if (!fs.existsSync(pinsFilePath)) {
            // If file doesn't exist, create an empty array and write it to the file
            fs.writeFileSync(pinsFilePath, '[]');
        }

        // Read pins data from JSON file
        const pinsData = fs.readFileSync(pinsFilePath);
        const pins = JSON.parse(pinsData);

        logger.info(`Pins retrieved: ${pins.length}`)

        // Return the pins data
        return { err: null, result: pins };
    } catch (error) {
        logger.error("Error reading pins file:", error);
        return { err: error, result: null };
    }
};

module.exports = { handleGetPins };
