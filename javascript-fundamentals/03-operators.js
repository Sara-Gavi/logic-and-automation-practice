let number = 5;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
  console.log("a es el mayor");
} else if (b >= a && b >= c) {
  console.log("b es el mayor");
} else {
  console.log("c es el mayor");
}

// condición ? valor_si : valor_no
a >= b && a >= c
  ? console.log("a es el mayor")
  : b >= a && b >= c
    ? console.log("b es el mayor")
    : console.log("c es el mayor");

let hasLicense = true;
let age = 17;

if (hasLicense && age >= 18) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}
