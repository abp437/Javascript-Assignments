const express = require('express'),
  {
    MongoClient,
  } = require('mongodb'),
  assert = require('assert'),
  bodyParser = require('body-parser'),
  {
    dbName,
    dbUrl,
    port,
  } = require('./config'),
  dbClient = new MongoClient(dbUrl),
  app = express(),

  // Create Todo
  insertTodo = (db, callback) => {
    const docs = db.collection(dbName).insertOne({
      name: 'Sourabh',
    }, (err, response) => {
      console.log(response.ops);
    });
    callback(docs);
  },

  // Read Todo
  retrieveTodo = (db, callback) => {
    db.collection(dbName).find({
      name: 'Akshay',
    }).toArray((err, docs) => {
      if (err) throw err;
      callback(docs);
      return docs;
    });
  },

  // Delete Todo
  deleteTodo = (db) => {
    db.collection(dbName).deleteMany({
      name: 'Akshay',
    }, (err) => {
      if (err) throw err;
      console.log('Deleted Successfully');
    });
  };

// Applying Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// DB Connection
dbClient.connect((err) => {
  const db = dbClient.db(dbName);
  assert.equal(null, err);
  console.log('Connected To Database Server');
  app.get('/todos', (req, res) => {
    db.collection(dbName).find({
      name: 'Sourabh',
    }).toArray((error, docs) => {
      if (error) throw error;
      res.send(docs);
    });
  });

  // insertTodo(db, () => {});

  app.delete('/todos/delete', (req, res) => {
    deleteTodo(db, () => {});
  });
});

// Routes For REST API
app.get('/', (req, res) => res.send('Hello World'));

// Server Start
app.listen(port, () => console.log(`Listening on Port ${port}`));
