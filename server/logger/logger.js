const logger = {
    error: (message) => {
        console.error(`[${getCurrentTimestamp()}] [ERROR] ${message}`);
    },
    warn: (message) => {
        console.warn(`[${getCurrentTimestamp()}] [WARN] ${message}`);
    },
    info: (message) => {
        console.log(`[${getCurrentTimestamp()}] [INFO] ${message}`);
    },
    get: (message) => {
        console.log(`[${getCurrentTimestamp()}] [GET] ${message}`);
    },
    post: (message) => {
        console.log(`[${getCurrentTimestamp()}] [POST] ${message}`);
    },
    del: (message) => {
        console.log(`[${getCurrentTimestamp()}] [DELETE] ${message}`);
    },
    debug: (message) => {
        console.debug(`[${getCurrentTimestamp()}] [DEBUG] ${message}`);
    }
};

function getCurrentTimestamp() {
    const now = new Date();
    const timestamp = now.toISOString();
    return timestamp;
}

module.exports = logger;