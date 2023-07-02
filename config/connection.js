const sequelize = require('sequelize');
require('dotenv').config();

const sequelizeConnection = new sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect:'mysql',
        port: 3306
    }
)
module.export = sequelize;
