class regionsError {
    constructor(code, description, message, isOperational) {
        Error.call(this);
        Error.captureStackTrace(this);

        this.code = code;
        this.description = description;
        this.isOperational = isOperational;
    }
}

module.exports = regionsError;