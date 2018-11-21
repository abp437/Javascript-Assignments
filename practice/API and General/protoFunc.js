// ------------------ PROTOTYPAL ------------------
// .prototype is accessible to functions only
// Whenever we want to check the prototype of an object we need to access __proto__.constructor.prototype

// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__

// Object.prototype -> constructor -> __proto__ generated of the object;

// Function Object -> constructor is different than __proto__ of the Function Object since __proto__ points to the parent's constructor

// Object.create creates a new object with prototype set to a certain object.
// Factory Pattern for Object Creation
const makeGladiator = (name, attack, defense, hitPoints) => {
  return {
    name,
    attack,
    defense,
    hitPoints,
    sayName: function () {
      console.log(`Hello my name is ${this.name}`);
    }
  }
}
const jesse = makeGladiator('Jesse', 10, 12, 10),
  john = makeGladiator('John', 12, 10, 12);
// Prototype pattern for Creating Objects
function Gladiator(name, attack, defense, hitPoints) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.hitPoints = hitPoints;
  this.weapon = "Sword";
}
Gladiator.prototype.sayName = function () {
  console.log('Gladiator Prototype called.');
  console.log(`Hello my name is ${this.name}`);
}
function v2makeGladiator(name, attack, defense, hitPoints) {
  return new Gladiator(name, attack, defense, hitPoints);
}
const v2jesse = v2makeGladiator('Jesse', 10, 12, 10),
  v2john = v2makeGladiator('John', 12, 10, 12);
function Human(name, attack, defense, hitPoints) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.hitPoints = hitPoints;
  this.weapon = new Weapon(1, 1);
}
function Weapon(howManyDie, typeOfDie) {
  this.howManyDie = howManyDie;
  this.typeOfDie = typeOfDie;
}
// This line introduces prototypal inheritance in which Humans inherit
// from Gladiator which means all the Gladiator prototype functions will
// be available on the Human objects.
Human.prototype = new Gladiator();
// If we don't use the line below then although we create Human objects
// inherited from Gladiator prototype our objects will point to the
// Gladiator constructor, since we inherit from it.
Human.prototype.constructor = Human;
const v3jesse = new Human('Jesse', 10, 12, 10),
  v3john = new Human('John', 12, 10, 12);
function Animal(name, attack, defense, hitPoints) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.hitPoints = hitPoints;
  this.weapon = new Weapon(1, 2);
}
Animal.prototype = new Gladiator();
Animal.prototype.constructor = Animal;
// This Animal prototype method overrides the Gladiator prototype method
// If we didn't define this method then the object looks up in the
// inheritance chain for existence of the method.
Animal.prototype.sayName = function () {
  console.log(`Hey Human mein name ist ${this.name}`);
}

// There is no classes and instantiation in Prototypal Inheritance.
// Instead it's all References and Delegation.

// So whenever we set a same named property on an object then they don't actually override it in the __proto__
// But instead  the lookup mechanism is like this:
// They first look into it's own properties and if not found then it looks into __proto__ properties
// But they don't override each other since both are different altogether.

// If you want to use functions as constructors with new keyword then the  .prototype can be used since the .prototype property exists only on functions.

// ------------------ FUNCTIONAL ------------------


const cat = {
  makeSound: function () {
    console.log(this.sound);
  }
};

const mark = Object.create(cat);
mark.sound = "Meow";
mark.makeSound();

const waffles = Object.create(cat);

const animals = [
  { "name": "Fluffykins", "species": "Rabbit" },
  { "name": "Hamilton", "species": "Dog" },
  { "name": "Ursula", "species": "Cat" },
  { "name": "Harold", "species": "Fish" },
  { "name": "Jimmy", "species": "Fish" },
  { "name": "Carol", "species": "Dog" }
];

// const dogs = [];

// for (i = 0; i < animals.length; i++) {
//   if (animals[i]["species"] === "Dog") {
//     dogs.push(animals[i]);
//   }
// }

// var isSpecifiedAnimal = function isSpecifiedAnimal(animalSpecie) {
//   return function (animal) {
//     return animal["species"] === animalSpecie;
//   };
// };

// Substitute:
// 'as' with 'animalSpecie',
// 'a' with 'animal',
// 'ga' with 'isSpecifiedAnimal'('getAnimals'),
//  I've put as, a and ga just for shorter syntax.

// 318 characters including 'console.log'
const ga = as => a => a["species"] === as;

const getDogs = animals.filter(ga("Dog"));
const getCats = animals.filter(ga("Cat"));
const getRabbits = animals.filter(ga("Rabbit"));
const getFishes = animals.filter(ga("Fish"));

console.log(getDogs);
console.log(getCats);
console.log(getRabbits);
console.log(getFishes);

// Even Shorter Syntax:
// I've used
// 's' for 'animalSpecie',
// 'f' for 'filteredSpecie',
// 'ga' for 'getAnimals'.
// const ga = s => animals.filter(f => f["species"] === s);

// Shortest Syntax with Composable functions
// Here, I'm using the function z which is already defined above
// 'as' with 'animalSpecie',
// 'gafs' for 'getAnimalsFilteredSpecies'.

// 193 characters including 'console.log'
const gafs = as => animals.filter(ga(as));
// I could have also done something like this and got rid of 'ga' function altogether,
// but since I wanted to return a lot of functions so I did the above 'gafs' function.
// const gafs = as => animals.filter(a => a["species"] === as);

console.log(gafs("Dog"));
console.log(gafs("Cat"));
console.log(gafs("Rabbit"));
console.log(gafs("Fish"));

// Topics to be covered:
// Maps and Sets
// Higher order functions, when you return a function from a function.
// Function Chaining
// Currying
// Modules
// Promises, Async Await

// Proxy and Reflection
// Web Workers
