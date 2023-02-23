/*

In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Traditionally (before ES6), JavaScript only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes

*/


function init() {
    const name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();



  if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }

  //  this line in javascript will not throw error because var does not dependent on the scope given by braces like other languages here x will be globally scoped
  console.log(x);


  if (Math.random() > 0.5) {
    const y = 1;
  } else {
    const y = 2;
  }
  // this line will cause a reference issue because y will be block scoped, let and const both are block scoped and started supported in es6 syntax
 // console.log(y); // ReferenceError: x is not defined


/*

var variables can be re-declared and updated

const cannot be updated or re-declared

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this.

var variables are hoisted to the top of their scope and initialized with a value of undefined.




*/

// this will be printed  as undefined var variables are hoisted
/*

    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
  */
console.log (greeter);// undefined 
var greeter = "say hello"