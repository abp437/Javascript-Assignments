'use strict';

const mult = (a, b) => a * b;

setTimeout(() => console.log(mult(5, 10)), 1000);

// Explanation:
// Simple thing over here is in one line functions you don't need an explicit
// return statement, but that's true only until that statement evaluates to an
// expression then arrow function figures it out. But if it isn't an expression
// and just a statement then it doesn't return that value. However multi-line
// functions need to have a return statement regardless.

// There's a lot more to arrow functions, it can be found here:
// http://exploringjs.com/es6/ch_arrow-functions.html
