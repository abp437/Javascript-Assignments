/*
 * A Promise is an Object
 * `fetch` returns us a Promise Object
 * A Promise can be in a certain state
 * The possible states are:
 * Pending - Waiting for the data to arrive
 * Fulfilled - Data has successfully arrived
 * Rejected - Errors in execution of a Promise
 * Then we can just check the state of this Object, we can use it using catch
 * `then` is a function that receives a function to be excuted when a Promise has been fulfilled
 * `catch` is a function that receives a function to be excuted when a Promise has been rejected
 * `Promise.all` expects an array of promises and it resolves finally when all the promises are resolved
 * But it has a drawback, it's all or nothing, i.e. even if one promise rejects then everything is rejected
 */

const usersAPI = "https://reqres.in/api/users";
const productsAPI = "https://reqres.in/api/products";

function fetchParaData(json, destructuredProp) {
  const { data } = json;
  data.forEach(element => createPara(element[destructuredProp]));
}

function createPara(element) {
  const paraElem = document.createElement("p");
  paraElem.innerText = element;
  document.body.appendChild(paraElem);
}

// Callbacks are generally meant for Events
document.addEventListener("DOMContentLoaded", () => {
  fetch(usersAPI)
    .then(response => response.json())
    .then(json => {
      fetchParaData(json, "email");
      return fetch(productsAPI);
    })
    .then(response => response.json())
    .then(json => fetchParaData(json, "name"))
    .catch(error => console.error(error));
});
