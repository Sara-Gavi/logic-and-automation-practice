let numberExample = 10;
console.log(typeof numberExample); // Output: "number"

let stringExample = "Hello, World!";
console.log(typeof stringExample); // Output: "string"

let booleanExample = true;
console.log(typeof booleanExample); // Output: "boolean"

let undefinedExample;
console.log(typeof undefinedExample); // Output: "undefined"

let nullExample = null;
console.log(typeof nullExample); // Output: "object" (this is a known quirk in JavaScript)

console.log("10" + 5);
console.log("10" - 5);
console.log(true + true);
console.log(false + 1);
console.log(null + 1);
console.log(0 == false);
console.log(0 === false);

let a;
let b = null;
console.log(a == b); // Output: true
console.log(a === b); // Output: false
