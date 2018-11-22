const animals = [{
    "name": "Fluffykins",
    "species": "Rabbit"
  },
  {
    "name": "Hamilton",
    "species": "Dog"
  },
  {
    "name": "Ursula",
    "species": "Cat"
  },
  {
    "name": "Harold",
    "species": "Fish"
  },
  {
    "name": "Jimmy",
    "species": "Fish"
  },
  {
    "name": "Carol",
    "species": "Dog"
  }
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
