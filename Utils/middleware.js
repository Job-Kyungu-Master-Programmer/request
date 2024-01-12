
const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method :', request.method)
    logger.info('Body:' , request.body)
    logger.info('Path : ', request.path)
    logger.info('____________________')
    next();
}

const requestUnknow = (request, response) => {
    response.status(404).send('PAGE NOT FOUND')
}

module.exports = {
    requestLogger,
    requestUnknow
}