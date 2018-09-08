'use strict';

const sum = (...restArgs) => restArgs.reduce((total, num) => total + num);

console.log(sum(1, 3));

console.log(sum(10, 20, 5));

console.log(sum(2, 5, 80, 1, 10, 12));

// Explanation:
// Here I have used Rest Parameter for taking variable number of arguments.
// In the code snippet …restArgs creates an array restArgs that holds all the
// arguments passed to the function in an array. So basically it's like passing
// an array as an argument to a function. Since restArgs is an array I can apply
// array methods on it.
// Also here I've used reduce since we need to get a single value from the
// function which is related to the result of the previous iteration of the
// operation.
// So reduce takes an array then performs some operation on it and then returns
// a value as an argument to the next iteration until the last value is
// evaluated and returned.
