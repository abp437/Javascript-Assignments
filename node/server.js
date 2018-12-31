const express = require('express'),
  MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  dbUrl = 'mongodb://localhost:27017',
  dbName = 'users',
  dbClient = new MongoClient(dbUrl),
  port = process.env.PORT || 3000,
  app = express();


app.get('/', (req, res) => res.send('Hello World'));

const insertUser = (db, callback) => {
  const docs = db.collection('users').insertOne({
    name: 'Akshay'
  }, (err, response) => {
    console.log(response.ops);
  });
  callback(docs);
};

const retrieveUser = (db, callback) => {
  db.collection('users').find({
    name: 'Akshay'
  }).toArray((err, docs) => {
    assert.equal(err, null);
    console.log("Found the Following Records");
    console.log(docs);
    callback(docs);
  });
};

dbClient.connect(err => {
  const db = dbClient.db(dbName);
  assert.equal(null, err);
  console.log("Connected To Database Server");
  insertUser(db, () => {
    retrieveUser(db, () => {
      dbClient.close();
    });
  });
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
