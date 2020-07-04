const winston = require('winston');

const logger = winston.createLogger({
  exitOnError: false,
  transports: [
    new winston.transports.File({
      level: 'info',
      colorize: false,
      filename: './logs/app.log',
      format: winston.format.simple(),
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: 'debug',
    colorize: true,
    handleExceptions: true,
    format: winston.format.simple(),
  }));
}

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
