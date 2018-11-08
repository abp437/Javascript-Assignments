var initiatePageLoad = {
  init: function () {
    this.initVariables();
    this.bindEvents();
  },
  initVariables: function () {
    this.getButtonClick = document.getElementById("getDataBtn");
    this.getPara = document.getElementById("getDataPara");
    this.postButtonClick = document.getElementById("postDataBtn");
    this.postPara = document.getElementById("postDataPara");
    this.postUserName = document.getElementById("postUserName");
    this.postUserJob = document.getElementById("postUserJob");
    this.incrementValue = 0;
  },
  bindEvents: function () {
    this.getButtonClick.addEventListener("click", () => {
      this.getData(this.incrementValue);
    }, false);
    this.postButtonClick.addEventListener("click", () => {
      this.postData();
    }, false);
    this.targetInputValueUpdater(this.postUserName);
    this.targetInputValueUpdater(this.postUserJob);
  },
  targetInputValueUpdater: function (targetElement, callback = function () { }) {
    targetElement.addEventListener("input", function (event) {
      this.value = event.target.value;
      callback();
    });
  },
  getData: function () {
    const that = this,
      myApiObj = new XMLHttpRequest();
    this.incrementValue++;
    myApiObj.open("GET", `https://reqres.in/api/products/${this.incrementValue}`, true);
    myApiObj.onreadystatechange = function () {
      if (this.readyState === 4) {
        const targetResponse = JSON.parse(this.response);
        that.getPara.innerText = targetResponse.data.name;
      }
    };
    myApiObj.send();
  },
  fetchPostData: function () {
    if (this.postUserName.value !== "" && this.postUserJob.value !== "") {
      return {
        user: this.postUserName.value,
        job: this.postUserJob.value
      }
    } else {
      return null;
    }
  },
  postData: function () {
    const that = this,
      myApiObj = new XMLHttpRequest(),
      xhrSaver = this.fetchPostData();
    if (xhrSaver === null) {
      return;
    }
    myApiObj.open("POST", "https://reqres.in/api/users", true);
    myApiObj.setRequestHeader("Content-type", "application/json");
    myApiObj.onreadystatechange = function () {
      if (this.readyState === 4) {
        const targetResponse = JSON.parse(this.response);
        that.postPara.innerText = `Name: ${targetResponse.user} Job: ${targetResponse.job}`;
      }
    };
    myApiObj.send(JSON.stringify(xhrSaver));
  }
};

// Private Variables and Functions
// Minimize XHR calls - 204 - Optional method which gets fired for Post request to check the availability of resources.
