const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LeafletJS App API',
            version: '1.0.0',
            description: 'API endpoints used for leafletJS application',
        },
    },
    apis: ['./router/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
