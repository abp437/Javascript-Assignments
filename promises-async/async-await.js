// Async / Await - Fetch

(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await res.json());
})();
