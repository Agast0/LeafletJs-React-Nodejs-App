const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig/swaggerOptions');
const router = require('./router/router');
const logger = require('./logger/logger');

const app = express();
const port = 3001;

app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
});

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
logger.info(`Swagger UI available at http://localhost:${port}/api-docs`);

// Register the pin routes
app.use('/', router);