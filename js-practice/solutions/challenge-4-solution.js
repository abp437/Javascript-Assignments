'use strict';

var a = 5,
  b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  console.log(c);
}

console.log(c);

// Explanation:
// This involves the specification which implies that all identifiers declared
// with `let` or `const` should be declared prior to their usage. Also the fact
// that `let` and `const` follows Block Scope, so the last line will generate an
// error since `c` hasn't been declared in the file scope instead it has been
// declared in the `if` statement, so unaccessible outside it.
