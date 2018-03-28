let express =  require('express'),
app =  express(),
port =  process.env.PORT || 3001,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

app.use((req, res) => {
	res.status(404).send({ url: req.originalUrl + ' not found' });
});

console.log(`To Do List RESTful API started on Port ${port}`);
