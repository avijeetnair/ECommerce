/*
* This file contains the controller logic for the category resource.
* Everytime a CRUD request come for the category, methods define 
* in this controller file will be executed.
*/

//const { category } = require("../models");not reqd as line 9 there
const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Category = db.category;

/*
    * POST: Create and save a new category
*/

exports.create = (req,res) =>
{
    if(!req.body.name){
        res.status(400).send({
            message: "Name of the category can't be empty !"
        })
        return;
    }


const category = {
    name: req.body.name,
    decription: req.body.description
};

Category.create(category)
.then(category =>
    {
        console.log("category name: [$category.name] got inserted")
        res.status(201).send(category);
})

.catch(err =>{
    console.log(`Issue in inserting category name: [${category}]`);
    console.log(`Error Message : ${err.message}`)
    res.status(500).send({
        message: "Some internal error while storing the category"
    })
})
}

/*
* Get a list of all the categories
*/

exports.findAll = (req, res) => {

    let categoryName = req.query.name ;
    let promise;
    if(categoryName)
    {
        promise = Categpry.findAll({
            where:{
                name: categoryName
            }
        });
    }else{
        promise = Category.findAll();
    }

    promise
    .then(categories => {
        res.status(200).send(categories);
    })
    .catch(err => {
        res.staatus(500).send({
            message: "Some internal error while fetching the category."
        })
    })
}

/*
    * Get a category based on the category id
*/

exports.findOne = (req,res) => {
    const categoryId = req.params.id;

    Category.findByPk(categoryId)
    .then(category => {
        res.status(200).send(category);
    })
    .catch(err => {
        res.status(500).send({
            message:"Some internal error while fetching the category"
        })
    })
}

/*
    * Update the existing category
*/

exports.update = (req, res) => {
    const category = {
        name: req.body.name,
        description: req.body.description
    };
    const categoryId = req.params.id;

    Category.update(category, {
        where: {id:categoryId}
    })
    .then(updatedCategory => {
        //where the updation happened successfully.
        //You need to send the updated row to the table.
        //But while fetching that row and sending it to user
        //there can be error
        Category.findByPk(categoryId)
        .then(category => {
            res.status(200).send({})
        })
        .catch(err=>
            res.status(500).send({
                message:"Some interna error while fetching "
            })
        )
    })

    .catch(err => {
        //where the updation task failed.
        res.status(500).send({
            message: "Some internal error while updating the catch"
        })
    })
}
