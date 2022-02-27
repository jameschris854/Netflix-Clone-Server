const rootSequelizeInstance = require('../dataBase/sequelize_connection');
const app = require('./app');
const config = require('./config/config');

const port = config.port

app.listen(port ,async () => {
    try {
        await rootSequelizeInstance.authenticate();
        console.log('DB Connection has been established successfully.');
        console.log(`Server running on port ${port}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      } 
})