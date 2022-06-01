/*
*This file willl be used to represent the category schema

*Category fields:
1.id
2.name
3.description
*/

//const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) =>{
const Category = Sequelize.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: Sequelize.toString,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING
    }
});
return Category;
}
