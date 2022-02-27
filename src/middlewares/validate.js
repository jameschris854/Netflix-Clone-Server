const Joi = require("joi");
const pick = require("../utils/pick");
const AppResponse = require("../utils/AppResponse");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

/**
 * @name validate
 * @param {Object} schema
 * @description This function validates the request using the appropriate joi validation
 * @returns next
 */
const validate = (schema) => (req, res, next) => {
  /*
    The schema passed will contain the key ["params", "query", "body"] in which the data is expected.
    By using the pick function, we are extacting it.
  */
  const validSchema = pick(schema, ["params", "query", "body"]);

  /*
    Once we get the validSchema, the using the key in that schema we are extracting the data
    from the incoming request
  */
  const object = pick(req, Object.keys(validSchema));
  /*
    At this point we have data from the request and the schema using which it can be validated
    Thus we are now making use of Joi to validate it
  */
  const { value, error } = Joi.compile(validSchema, {})
    .prefs({ errors: { label: "key" }, stripUnknown: true })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");

    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }

  //If all good we are putting the data into req, so that we can access at a later point
  req = { ...req, ...value };
  return next();
};

module.exports = validate;