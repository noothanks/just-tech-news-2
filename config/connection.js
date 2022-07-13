//import sequelize constructor from library
const Sequelize = require('sequelize');

//import configuration
require('dotenv').config;

//create connection to db
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Unitas1108!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;