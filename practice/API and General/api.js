// This style of Programming exposes all the functions and variables accessible as Object Properties.
// So you can fire any functions as object properties on the console itself.
// So that's a serious drawback since none of our code or variables are encapsulated or private.
// Although this code looks pretty but functionally unacceptable.
// So we need to find a better way of programming.

var initiatePageLoadObject = {
  init: function() {
    this.initVariables();
    this.bindEvents();
  },

  initVariables: function() {
    this.getButtonClick = document.getElementById("getDataBtn");
    this.getPara = document.getElementById("getDataPara");
    this.postButtonClick = document.getElementById("postDataBtn");
    this.postPara = document.getElementById("postDataPara");
    this.postUserName = document.getElementById("postUserName");
    this.postUserJob = document.getElementById("postUserJob");
    this.incrementValue = 0;
  },

  bindEvents: function() {
    this.getButtonClick.addEventListener("click", () => {
      this.getData(this.incrementValue);
    }, false);
    this.postButtonClick.addEventListener("click", () => {
      this.postData();
    }, false);
    this.targetInputValueUpdater(this.postUserName);
    this.targetInputValueUpdater(this.postUserJob);
  },

  targetInputValueUpdater: function(targetElement, callback = function() {}) {
    targetElement.addEventListener("input", function(event) {
      this.value = event.target.value;
      callback();
    });
  },

  getData: function() {
    const that = this,
      myApiObj = new XMLHttpRequest();
    this.incrementValue++;
    myApiObj.open("GET", `https://reqres.in/api/products/${this.incrementValue}`, true);
    myApiObj.onreadystatechange = function() {
      if (this.readyState === 4) {
        const targetResponse = JSON.parse(this.response);
        that.getPara.innerText = targetResponse.data.name;
      }
    };
    myApiObj.send();
  },

  fetchPostData: function() {
    if (this.postUserName.value !== "" && this.postUserJob.value !== "") {
      return {
        user: this.postUserName.value,
        job: this.postUserJob.value
      };
    } else {
      return null;
    }
  },

  postData: function() {
    const that = this,
      myApiObj = new XMLHttpRequest(),
      xhrSaver = this.fetchPostData();
    if (xhrSaver === null) return;
    myApiObj.open("POST", "https://reqres.in/api/users", true);
    myApiObj.setRequestHeader("Content-type", "application/json");
    myApiObj.onreadystatechange = function() {
      if (this.readyState === 4) {
        const targetResponse = JSON.parse(this.response);
        that.postPara.innerText = `Name: ${targetResponse.user} Job: ${targetResponse.job}`;
      }
    };
    myApiObj.send(JSON.stringify(xhrSaver));
  }
};

// This way of prgramming encapsulates all the variables.
// We can expose only those variables or functions which we intend to, so no more exposing of all variables.
// This style of programming successfully creates private variables using the concept of Closures extensively.
// Also we can achieve function chaining in this style of programming.
// I think we should adapt to this style of programming.
// I had initally made this function to be a function expression called 'initiatePageLoadFunction' but I made it
// an IIFE since I knew that this function was to be executed just once in a page, also I wanted it to be never
// accessible on the console thus achieveing total encapsulation as well.
(function() {
  let incrementValue = 0;
  const getButtonClick = document.getElementById("getDataBtn"),
    getPara = document.getElementById("getDataPara"),
    postButtonClick = document.getElementById("postDataBtn"),
    postPara = document.getElementById("postDataPara"),
    postUserName = document.getElementById("postUserName"),
    postUserJob = document.getElementById("postUserJob"),

    init = function() {
      bindEvents();
    },

    bindEvents = function() {
      getButtonClick.addEventListener("click", () => {
        getData(incrementValue);
      }, false);
      postButtonClick.addEventListener("click", () => {
        postData();
      }, false);
      targetInputValueUpdater(postUserName);
      targetInputValueUpdater(postUserJob);
    },

    targetInputValueUpdater = function(targetElement, callback = function() {}) {
      targetElement.addEventListener("input", function(event) {
        this.value = event.target.value;
        callback();
      });
    },

    getData = function() {
      const myApiObj = new XMLHttpRequest();
      incrementValue++;
      myApiObj.open("GET", `https://reqres.in/api/products/${incrementValue}`, true);
      myApiObj.onreadystatechange = function() {
        if (this.readyState === 4) {
          const targetResponse = JSON.parse(this.response);
          getPara.innerText = targetResponse.data.name;
        }
      };
      myApiObj.send();
    },

    fetchPostData = function() {
      if (postUserName.value !== "" && postUserJob.value !== "") {
        return {
          user: postUserName.value,
          job: postUserJob.value
        };
      } else {
        return null;
      }
    },

    postData = function() {
      const myApiObj = new XMLHttpRequest(),
        xhrSaver = fetchPostData();
      if (xhrSaver === null) {
        return;
      }
      myApiObj.open("POST", "https://reqres.in/api/users", true);
      myApiObj.setRequestHeader("Content-type", "application/json");
      myApiObj.onreadystatechange = function() {
        if (this.readyState === 4) {
          const targetResponse = JSON.parse(this.response);
          postPara.innerText = `Name: ${targetResponse.user} Job: ${targetResponse.job}`;
        }
      };
      myApiObj.send(JSON.stringify(xhrSaver));
    };

  return {
    init: init
  };
})().init();
