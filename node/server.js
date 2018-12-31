const express = require('express'),
  {
    MongoClient,
  } = require('mongodb'),
  assert = require('assert'),
  dbUrl = 'mongodb://localhost:27017',
  dbName = 'users',
  dbClient = new MongoClient(dbUrl),
  port = process.env.PORT || 3000,
  app = express(),

  // Create User
  insertUser = (db, callback) => {
    const docs = db.collection('users').insertOne({
      name: 'Akshay',
    }, (err, response) => {
      console.log(response.ops);
    });
    callback(docs);
  },

  // Read User
  retrieveUser = (db, callback) => {
    db.collection('users').find({
      name: 'Akshay',
    }).toArray((err, docs) => {
      assert.equal(err, null);
      console.log('Found the Following Records');
      console.log(docs);
      callback(docs);
    });
  },

  // Delete User
  deleteUser = (db) => {
    db.collection('users').deleteMany({
      name: 'Akshay',
    }, (err) => {
      if (err) throw err;
      console.log('Deleted Successfully');
    });
  };

// DB Connection
dbClient.connect((err) => {
  const db = dbClient.db(dbName);
  assert.equal(null, err);
  console.log('Connected To Database Server');
  insertUser(db, () => {});
  retrieveUser(db, () => {});
  deleteUser(db, () => {});
  dbClient.close();
});

// Routes For REST API
app.get('/', (req, res) => res.send('Hello World'));

// Server Start
app.listen(port, () => console.log(`Listening on Port ${port}`));
