/*
    *   This file will be created to represent the Product Schema
    *   Product Fields :
    *1. id
    *2. name
    *3. description
    *4. cost

*/

module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false
        },
        description: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER, 
            allowNull: false
        }
    },
    {
        tableName: 'products'
    })
    return Product;
}