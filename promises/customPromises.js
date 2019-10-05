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

function promisifiedTimeout(delay) {
  function dealWithPromise(resolve, reject) {
    if (isNaN(delay)) {
      reject(new Error("Delay requires a valid number"));
    }
    setTimeout(resolve, delay);
  }
  return new Promise(dealWithPromise);
}

document.addEventListener("DOMContentLoaded", () => {
  promisifiedTimeout(3000)
    .then(() => fetch(usersAPI))
    .then(response => response.json())
    .then(json => {
      fetchParaData(json, "email");
      return fetch(productsAPI);
    })
    .then(response => response.json())
    .then(json => fetchParaData(json, "name"))
    .catch(error => {
      console.error(error);
    });
});
