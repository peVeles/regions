const regionsError = require('./regionsError');
require('dotenv').config();

const regionsErrorHandler = async (err, req, res, next) => {

    if (err instanceof regionsError && err.isOperational) {
        if (process.env.NODE_ENV === 'dev') {
            console.error(err.description + ': ');
            console.error(err.message);
        }
        res.status(err.code).json(err.description);
        return;
    }

    // So, we have not idea what is going on
    if (process.env.NODE_ENV === 'dev') {
        console.error(err.message);
    }

    res.status(500).json('Something went wrong :(');
}

module.exports = regionsErrorHandler;