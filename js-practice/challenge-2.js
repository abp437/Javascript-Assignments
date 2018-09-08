/* CHALLANGE 2 - Const
Answer following Questions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?

Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";

let arr = [1, 2]; // BEFORE: const arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]

// Explanation:
// In JavaScript, `const` means that the identifier can’t be reassigned.
// Since I wasn't allowed to change lines 14 and 19, and line 19 includes an
// explicit reassignment of the array, so I needed to change that identifier
// from `const` to `let` so that reassignment of line 19 would work properly.

// Answer 1:
// Since there isn't an explicit reassignment to that identifier, it should be
// noted that it is of utmost importance to understand that the two keywords
// `let` and `const` were introduced just in context of identifiers and not in
// terms of objects, since although an Array is an Object, the pushing of an
// element on the Array didn't result in any errors, since the identifier wasn't
// reassigned although a new element was actually pushed at the end of the array,
// So we can deduce that `const` relates to identifiers and not objects.

// Answer 2:
// Since there was a reassignment on line 19 to an identifier which had been
// declared as `const`.

// Extra things:
// Block Scope is everything that is surrounded by {}, `let` and `const` follow
// Block Scope, while `var` folows Functional Scope. Block Scope means whenever
// you define an identifier, it wouldn't be available outside of the block where
// it has been defined.
