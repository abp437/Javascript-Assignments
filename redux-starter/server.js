const path = require('path'),
  express = require('express'),
  PORT = process.env.PORT || 5000,
  app = express(),
  publicPath = path.join(__dirname, '/dist');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server started successfully.');
});
