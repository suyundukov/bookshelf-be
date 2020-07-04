class AppError extends Error {
  constructor(code, message, data) {
    super(message);

    this.code = code;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
