const express = require('express'),
  port = 3000,
  app = express();

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Listening on Port ${port}`));
