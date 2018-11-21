function foo() {
  console.log("Function Foo is Called");
}

// Function expressions are possible in JS due to them being first class functions.
var bar = function () {
  console.log("Function Bar is Called");
};

foo();
bar();

// Scopes:
// Scope dictates a portion of a program where a particular variable is accessible.
// Accessibility depends on the declaration.
// Block Scoping is the scope available in { }. But it's not there in JS, unless you use let, const.
// To create scopes in JS, you need functions.
// Function arguments aren't accessible outside of the function.

// IIFE helps solve two problems, one is avoiding Global Function Name Clashes and the next is Private variables(Closures).
// Any identifier without 'var' keyword gets added as a property to the Global Object.

// Global variables and functions get added as properties to the Global Object.
// You can't delete any properties of the Global Object, these include the ones that we have added.

// Compilation and Interpretation:
// The compilation step is only concerned with the declaration of variables and functions.
// It just looks up for the "var" and "function" keywords. It doesn't care about the assignment, just the declaration.
// The compilation step thus registers all the variables in all the scopes.

// Any identifier without 'var' keyword gets added as a property to the Global Object.
// Nothing breaks functional Scope in JS. Except the identifiers without the 'var' keyword, but that is conditional as well.
// The variable won't get added onto the Window Object until the function is called.

var a = 10;

function myFn() {
  var b = a;
  console.log(b);
  c = "Yes this is correct";
}

console.log(window.c);

myFn();
console.log(window.c);
// So the compilation step works this way, it looks up for "var" keywords, finds "a" and "b" declared with "var" but skips "c" since it doesn't have "var" or "function" keyword before it.
// Now it registers "a", "myFn" in Global Scope and "b" in "myFn" scope.
// Now starts the interpretation step.
// Now the interpreter looks up in the respective scopes for the existence of variables in respective scopes. It successfully finds "a", "b", "myFn" in respective scopes.
// The script successfully executes line 1 then declares the function body.
// But now comes the case with "c", it finds out that "c" is not present in the "myFn" scope so it tries to find it out in the "Global" scope.
// Now it just tries to log "window.c" onto the console, but since window doesn't have the property attached to it, it returns us undefined.
// But once the function is called then the variable "c" the scope finds out that "c" is not present in the "myFn" scope so it tries to find it out in the "Global" scope
// It couldn't find it there as well but since it's not a get statement instead a set statement
// the interpreter adds that variable as a property to the Global Scope and thus it gets attached to the Global scope after the "myFn" function is called.

// CONCLUSION:
// VARIABLES GET CREATED ON FUNCTION CALL, NOT ON DECLARATION.

// Closures:

var externalParam = 10;

function outer() {
  var firstImplicitParam = 20;
  externalParam++;
  firstImplicitParam++;
  console.log(externalParam);
  return function (nextParam) {
    console.log(firstImplicitParam);
    console.log(nextParam);
  };
}

outer()(30);
outer()(20);

// Notice that the value of "externalParam" is always incremented since it's a global variable but the value of "firstImplicitParam" remains constant on each function call.
// This proves that new local variables are created for each function call.
// CONCLUSION:
// NEW LOCAL VARIABLES GET CREATED ON EACH FUNCTION CALL.

// But the major problem is that "externalParam" is accessible everywhere, we need to achieve total encapsulation.

var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

// The variable add is assigned the return value of a self-invoking function.
// It sets the counter to zero (0), and returns a function expression.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

for (i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(add());
  }, 5000);
}

for (j = 0; j < 10; j++) {
  (function (currentValueOfI) {
    console.log("Immediately Invoked Function Expresssion Called");
    setTimeout(function () {
      console.log(currentValueOfI);
    }, 1000);
  })(j);
}
