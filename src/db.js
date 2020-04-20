const MongoClient = require('mongodb').MongoClient;
const config = require('src/config')
const mongoUrl = config.mongoUrl;
const dbName = "foobar";

let db;

const dbClient = {
    init: async () => {
        MongoClient.connect(mongoUrl, {}, (err, connection)=>{
            if(err) { throw err; }
            db = connection.db(dbName);
            console.log('Database connected')
        });
    },
    getInstance: () => {
        return db;
    },
    close: () => {
        db.close();
    }
}
module.exports = dbClient;