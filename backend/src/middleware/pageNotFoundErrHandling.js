const ApiErrors = require('../utils/ApiErrors')

const pageNotFoundErrHandling = (err, req, res, next) => {

    const error_obj = {
        status: err.status || 500,
        message: err.message || 'Internal Server Error'
    }
    res.status(error_obj.status).send(error_obj)

    if(err instanceof ApiErrors) {
        error_obj.status = err.status
        error_obj.message = err.message
    }


}

module.exports = pageNotFoundErrHandling
