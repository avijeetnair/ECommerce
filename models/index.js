/*
* 1.Create the DB connection with the help of sequelize
* 2. Export all the functionalities of the model through th
*
* One of the advantages of using index.js file is, other files
* trying to import this file, just need to provide
* the module name.
*/





const config = require("../config/db.config");
const Sequelize = require("sequelize");

const seq = new Sequelize(
    config.DB,
    config.USER,
    config.PASSSWORD,
    {
        host: config.HOST,
        dilect: config.dialect
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = seq;
db.category = require('./category.model.js')(sequelize, Sequelize);
