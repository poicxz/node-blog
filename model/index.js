const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'node-blog';

function connect (callback) {
    MongoClient.connect(url,function(err,client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback && callback(db);
        client.close();
    });
};

module.exports = {
    connect
}
