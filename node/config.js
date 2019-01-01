module.exports = (() => {
  const port = process.env.PORT || 3000,
    dbUrl = 'mongodb://localhost:27017',
    dbName = 'todos';
  return {
    port,
    dbUrl,
    dbName,
  };
})();
