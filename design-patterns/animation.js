// Method 1
// Adding Things to prototype independently

const Anim = function() {

};

Anim.prototype.start = function() {
  console.log('Start');
};

Anim.prototype.stop = function() {
  console.log('Stop');
};

// Method 2
// Adding Things to prototype in a nested manner

const Anim2 = function() {

};

Anim2.prototype = {
  start: function() {
    console.log('Start');
  },
  stop: function() {
    console.log('Stop');
  },
};

// Method 3
// You can also add a method to a 'Function' object that can be use to declare methods via prototype

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
};


const Anim3 = function() {

};

Anim3.method('start', function () {
  console.log('Start');
});

Anim3.method('stop', function () {
  console.log('Stop');
});


// Usage of Method 1

const myAnim = new Anim();
myAnim.start();
myAnim.stop();

// Usage of Method 2

const myAnim2 = new Anim2();
myAnim2.start();
myAnim2.stop();

// Usage of Method 3

const myAnim3 = new Anim3();
myAnim3.start();
myAnim3.stop();
