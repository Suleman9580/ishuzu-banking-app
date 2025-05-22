const ApiErrors = require('../utils/ApiError')

const pageNotFoundErrHandling = (err, req, res, next) => {
    console.log(err.message)

    

    const error_obj = {
        status: err.status || 500,
        message: err.message || 'PAGE NOT FOUND Error',
        // stack: err.stack || 'No stack trace available',
    }
    res.status(error_obj.status).send(error_obj)

    if(err instanceof ApiErrors) {
        error_obj.status = err.status
        error_obj.message = err.message
    }


}

module.exports = pageNotFoundErrHandling
