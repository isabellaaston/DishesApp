const DbService = require('../Services/DbService');
const DishesService = require('../Services/DishesService');
const bodyParser = require('body-parser');

let jsonParser= bodyParser.json();

let ObjectId = require('mongodb').ObjectId;

const resolutionHandler = (res) => (documents) => {
    res.json(documents)
}

const AllDishes = (req, res) => {
    DbService((db) => {
        DishesService.getAllDishes(db, resolutionHandler(res))
    })
};

const SpecifiedDishes = (req, res) => {
    const spec = req.params.spec;
    console.log(spec)
    DbService((db) => {
        DishesService.getSpecifiedDishes(db, resolutionHandler(res), spec)
    })
};

module.exports.AllDishes = AllDishes;
module.exports.SpecifiedDishes = SpecifiedDishes;