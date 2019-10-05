/*
* Async - Await is basically just Syntactic Sugar, over Promises
* It's basically a function which returns us a Promise
*/

const usersAPI = "https://reqres.in/api/users";
const productsAPI = "https://reqres.in/api/products";

function fetchParaData({ data }, destructuredProp) {
  data.forEach(element => createPara(element[destructuredProp]));
}

function createPara(element) {
  const paraElem = document.createElement("p");
  paraElem.innerText = element;
  document.body.appendChild(paraElem);
}

async function asyncFetch() {
  const usersAPIresponse = await fetch(usersAPI);
  const usersAPIjson = await usersAPIresponse.json();
  const productsAPIresponse = await fetch(productsAPI);
  const productsAPIjson = await productsAPIresponse.json();
  // When all the Promises are resolved then return this Object.
  return {
    usersAPIjson,
    productsAPIjson
  };
}

document.addEventListener("DOMContentLoaded", () => {
  asyncFetch()
    .then(({ usersAPIjson, productsAPIjson }) => {
      fetchParaData(usersAPIjson, "email");
      fetchParaData(productsAPIjson, "name");
    })
    .catch(error => console.error(error));
});
