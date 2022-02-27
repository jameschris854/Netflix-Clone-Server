const ApiError = require("../utils/ApiError");
const AppResponse = require("../utils/AppResponse");
const httpStatus = require("http-status");

const responseConverter = (err, req, res, next) => {
  let error = err;
  console.log(err);
  if (error instanceof ApiError) {
    console.log("instance123", error.statusCode);
    const statusCode =
      error.statusCode ||
      (error instanceof sequelize.error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR);
    const message = error.message || httpStatus[statusCode];
    console.log(statusCode, message, false, err.stack);
    error = new ApiError(statusCode, message, false, err.stack);
  }

  next(error);
};

const responseHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  const hasError = !err.success;

//   if ( hasError && !err.isOperational) {
//     statusCode = httpStatus.INTERNAL_SERVER_ERROR;
//     message = httpStatus[statusCode];
//   }

  res.locals.errorMessage = err.message;

  let response = {
    status: statusCode,
    message,
  };

  if ( hasError) {
    response.stack = err.stack;
  } else {
    response = {
      ...response,
      ...err,
    };
  }

  res.status(statusCode).send(response);
};

module.exports = {
  responseConverter,
  responseHandler,
};
