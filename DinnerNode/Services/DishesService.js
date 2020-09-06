const getAllDishes = (db, callback) => {
    let collection = db.collection('Dishes');
    collection.find({}).toArray((err, documents) => {
        callback(documents);
    });
};

const getSpecifiedDishes = (db, callback, spec) => {
    let collection = db.collection('Dishes');
    collection.find({keyIngredients:{$in:'spec'}}).toArray((err, documents) => {
        callback(documents);
    });
};

module.exports.getAllDishes = getAllDishes;
module.exports.getSpecifiedDishes = getSpecifiedDishes;