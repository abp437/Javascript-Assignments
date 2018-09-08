'use strict';

const isNumber = a => typeof a === 'number'
  ? `That's a number`
  : `That's not a number`;

console.log(isNumber(10));

console.log(isNumber('Hey there'));

console.log(isNumber(true));

// No explanation necessary. No concepts involved here. It's just a style of
// programming to reduce code.
