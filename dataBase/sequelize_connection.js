const { Sequelize } = require("sequelize");
const DB_CONFIG = require("./config");

const config = DB_CONFIG;

const rootSequelizeInstance = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// const rootSequelizeInstance = new Sequelize('postgres://jiggxmze:j4C7vELnwKMcWBjDSU8MmZN6AcnJ4ulV@satao.db.elephantsql.com/jiggxmze') // Example for postgres


module.exports = rootSequelizeInstance;