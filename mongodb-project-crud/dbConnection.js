const { MongoClient } = require("mongodb");

// Connection URL
const dbConnnectionUrl = 'mongodb://localhost:27017';
const client = new MongoClient(dbConnnectionUrl);
const dbName = 'mongoDBProject_Database';

let dbConnnection = async () => {
    await client.connect();
	let db = client.db(dbName);
    return db;
}

module.exports={dbConnnection};
