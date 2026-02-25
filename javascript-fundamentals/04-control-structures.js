let temperature = 30;

if (temperature < 10) {
  console.log("It's a cold day");
} else if (temperature <= 25) {
  console.log("It's a warm day");
} else {
  console.log("It's a hot day");
}

let number = 10;

for (let i = 1; i <= number; i++) {
  console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }

  console.log(i);
}
