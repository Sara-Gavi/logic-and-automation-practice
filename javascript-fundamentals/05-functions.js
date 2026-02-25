function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(5));

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(5, 10));

function max2(a, b) {
  return a < b ? a : b;
}

function increaseAge(user) {
  user.age += 1;
}

let user = {
  name: "Sara",
  age: 36,
};

console.log("before:", user);
increaseAge(user);
console.log("after:", user);
