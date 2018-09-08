/*
Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2;
*/

'use strict';

const multiplyBy = (a, mult = 2) =>  console.log(a * mult);

multiplyBy(2);

multiplyBy(2, undefined);

multiplyBy(2, 0);

multiplyBy(5, 10);

multiplyBy(5, null);

// Answer:
// We can't use `mult = mult || 2;` for setting the default value of an argument
// since the `||` operator checks for falsy values of anything but the catch
// here is that it treats `0` as a falsy value as well along with `undefined`,
// so any multiplications with `0` should result `0` but it treats it as a falsy
// value and thus outputs `2 * 0` as `4`, since it takes up 2 as the default
// value altough `0` has been passed as an explicit argument.
// Altough one thing should be noted here that JS treats `null` as a falsy value
// as well. So, if I pass null as the second argument, then the output would be
// 0.

// Now we have set out the default parameter as 2 using ES6, now it'll take that
// as default param if and only if an argument is not passed to the function at
// all.
