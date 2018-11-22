// Object.crreate makes prototype inheritance possible in JS.
// Every Object is created from the master Object

console.dir(Object);

// The above object has methods and in it and I'm going to focus on create method of this master object.

// Object.create(prototypeObject, propertyObject)
const myLiteral = {};
const myObject = Object.create(Object.prototype);

// So we can see that whenever we create an empty Object Literal,
// it internaly calls the Object.create method with it's prototype set to master Object's prototype.
// So the result of both the log's is exactly the same.
console.dir(myObject);
console.dir(myLiteral);

const Car = function(color) {
  this.color = color;
}

Car.prototype.getColor = function() {
  return this.color;
}

const car1 = new Car('red');
const car2 = Object.create(Car.prototype);

// Constructors are basically functions that let's you populate the object with the specifed propperties.
// Constructors return us the prepared object.
// So to create objects via a function, you need to call that function in Constructor Mode and that's done via the 'new' keyword.
// Constructor function implicitly returns 'this'.

// The functon's 'this' reference changes in function callbacks. Not in Regular functions, in regular functions it just refers to the Global object.
// Calling Constructors without the 'new' keyword won't work. No object is created and returned in such functions.

// Execution Context:
// When a function is called, it's always called in a particular context.
// There are two default arguments to every function call, and they are 'this' and 'arguments'.
// So the value of this is basically determined by the way the function is called.
// There are 4 ways to call a function:
// foo();
// obj.foo();
// new foo();
// foo.call(obj);
// So based on the way the function is called the value of 'this' is determined.

// foo() -> The value of 'this' is the Global Object, same happens for ES6 standalone functions.
// obj.foo() -> The value of 'this' is the Object it is contained in.
// new foo() -> The value of 'this' is the Object that's going to be constructed.
// foo.call(obj) -> The value of 'this' is the context that we explicitly pass.

function Bicycle(tirePressure) {
  this.tirePressure = tirePressure;
  this.inflateTires = function() {
    this.tirePressure += 3;
  }
}

function Mechanic(name) {
  this.name = name;
}

var bicycle1 = new Bicycle(20);
var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;
mike.inflateTires.call(bicycle1);

// Whenever a Function Object is created in JS then it creates two objects in  the background.
// A Variable to access the Function
// A Prototype Object
// To access the Prototype Object you can just use the function name and then access the Prototype Object using the . or [] notations.
// This Protoype Object exists only on Function Objects.
// This Prototype Object exists on all Function Objects regardless of whether they are creating objects or not.
// If the Object doesn't have the property then the object lookup looks into the object's prototype for the property and if not found then returns "undefined".

// Why do Prototypes exist in JS????????
// FOR INHERITANCE.
// FOR THE PROTOTYPE LOOKUP SINCE PROTOTYPE LOOKUP HAPPENS AT RUNTIME.

function Employee(name) {
  this.name = name;
}

Employee.prototype.company = "EverScripts";
Employee.prototype.playPranks = function() {
  console.log("Prank Played");
};

var emp1 = new Employee("Akshay");
var emp2 = new Employee("Steve");

// A function gets the ".prototype" property in it while the Object generated from that function or any other object in general gets "__proto__" propert attached to it.
// So just look at this now:
console.log(Employee.prototype === emp1.__proto__);
