# API URL Shortener

API para encurtar URL

## Requeriments

* [Node.js](https://nodejs.org)
* [MongoDB](https://cloud.mongodb.com)

`
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://heviane:<password>@datalake0-4ptmr.a.query.mongodb.net/myFirstDatabase?ssl=true&authSource=admin";
MongoClient.connect(uri, function(err, client) {
const collection = client.db("test").collection("devices");
client.close();
});
`