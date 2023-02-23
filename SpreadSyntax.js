/*

The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


*/


function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6

  console.log(sum.call(null, numbers[0], numbers[1], numbers[2]));


const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2)

let arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];

//concatenation of arrays
arr5 = [...arr3, ...arr4];
console.group(arr5)


// object cloning heavily used in react
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
console.log(clonedObj);
// values of the parties will also be updated
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);


// Object.assign can be used to mutate an object, spreat syntax cant 


const obj3 = { foo: "bar", x: 42 };
Object.assign(obj3, { x: 1337 });
console.log(obj3); // { foo: "bar", x: 1337 }