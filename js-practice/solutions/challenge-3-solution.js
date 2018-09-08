'use strict';

const i = 10;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// Explanation:
// This involves the Lexical/Block scoping of the identifiers, which means that
// every identifier declared via `let` or `const` surrounded by {} won't be
// available outside of it's scope declaration. Now as you can see that I have
// made `i` as `const` on line 1 but on line 10 I have again made it to be `let`
// So although both the identifiers have got the same name but the convention
// being that `const` can't be redeclared we are able to do so since both's
// scopes are different, wherein `i` on line 10 follows the scope of the for
// loop, thus becoming unaccessible outside it. So they never conflict with
// eachother.

// Read this amazing article for further reference:
// https://blog.pragmatists.com/let-your-javascript-variables-be-constant-1633e56a948d
