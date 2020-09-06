const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'DishesApp';

const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

const connectToDb = (callback) => {
    Client.connect(() => {
        let db = Client.db(dbName);
        callback(db);
    }).then(() => {
        return Client.close()
    }).then(() => {

    })
};

module.exports = connectToDb;