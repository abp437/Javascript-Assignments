'use strict';

const isRequired = funcName => {
  throw new Error(`Function ${funcName} requires an argument!`);
};

const square = (a = isRequired('square')) => console.log(a * a);

square(10);

square();

// Explanation:
// Here I am handling whether the arguments are present via default params and
// firing a callback function which throws an Error if they aren't.
