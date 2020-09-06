const DishesController = require('../Controllers/DishesController');

const routes = (app) => {
    app.get('/all', DishesController.AllDishes);
    app.get('/:spec', DishesController.SpecifiedDishes);
};

module.exports = routes;