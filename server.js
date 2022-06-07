const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./configs/server.config');
//initialisig express
const app = express();



/*
* Using he body parser middleware
*
* Used for parsing the request
* Parsing the request of type json and cnvert that to object
*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*
** Initializing the database
*/

const db = require("./models");
const Category = db.category;

db.sequelize.sync({force: true})
.then(() => {
    console.log('tables dropped and created')
    init();
})

function init() {
    var categories = [
        {
            name: "Electronics",
            description: "This category will contain all the electronic products"
        },
        {
            name: "KitchenItems",
            description: "This category will all the kitchen product"
        }];

    Category.bulkCreate(categories)
    .then(() => {
        console.log("Category table initialized");
    })
    .catch(err => {
        console.log("Error while initilizing categories table");
    })
}

require('./routes/category.routes')(app)
require('./routes/product.routes')(app)

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`)
})
