const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(8000),
    DB_NAME: Joi.string().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_HOSTNAME: Joi.string().required(),
    DB_DIALECT: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log(`Environment validation error: ${error}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db_user: envVars.DB_USER,
  db_password: envVars.DB_PASSWORD,
  db_name: envVars.DB_NAME,
  db_hostname: envVars.DB_HOSTNAME,
  db_dialect: envVars.DB_DIALECT,
  jwt_token_secret: envVars.JWT_TOKEN_SECRET,
  jwt_token_expires_in: envVars.JWT_TOKEN_EXPIRES_IN,
  jwt: {
    secret: envVars.JWT_SECRET,
  },
};