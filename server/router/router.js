const express = require('express');
const { addPinValidator } = require("../validation/AddPinValidator");
const { removePinValidator } = require("../validation/RemovePinValidator");
const { handleGetPins } = require("../pinHandler/HandleGetPins");
const logger = require("../logger/logger");

const router = express.Router();

/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Health Check
 *     description: Endpoint to check the health status of the server.
 *     responses:
 *       '200':
 *         description: Server is live
 *       '500':
 *         description: Internal server error
 */
router.get('/health-check', (req, res) => {
    logger.get('Health check');
    res.send('Server is live!');
});

/**
 * @swagger
 * /pin/add:
 *   post:
 *     summary: Add a pin
 *     description: Endpoint to add a pin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lat:
 *                 type: string
 *               lng:
 *                 type: string
 *               datetime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       '200':
 *         description: Pin added successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post('/pin/add', (req, res) => {
    logger.post(`/pin/add | body: ${JSON.stringify(req.body)}}`)
    addPinValidator(req, res);
});

/**
 * @swagger
 * /pin/remove/{id}:
 *   delete:
 *     summary: Remove a pin
 *     description: Endpoint to remove a pin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: ID of the pin to be removed
 *     responses:
 *       '200':
 *         description: Pin removed successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Pin not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/pin/remove/:id', (req, res) => {
    logger.del(`/pin/remove/${req.params.id}`);
    removePinValidator(req, res);
});


/**
 * @swagger
 * /pin:
 *   get:
 *     summary: Get all pins
 *     description: Retrieve all pins stored in the system.
 *     responses:
 *       '200':
 *         description: A list of pins.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   lat:
 *                     type: string
 *                   lng:
 *                     type: string
 *                   datetime:
 *                     type: string
 *                     format: date-time
 *       '500':
 *         description: Internal server error
 */
router.get('/pin', (req, res) => {
    logger.get('/pin');
    const { err, result } = handleGetPins();
    if (err === null) {
        res.status(200).json(result);
    } else {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;