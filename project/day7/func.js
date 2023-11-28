//first we need to define a function and then run (call/execute) it

//traditional and old way of using it

//define
function sayHello() {
  console.log("hello");
}
//call it
sayHello();

//diceRoll function

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(` rolled ${num}`);
}

//now throw Dice will call rollDice
function throwDice() {
  for (let i = 0; i < 6; i++) {
    rollDice();
  }
}

throwDice();

//function with arguments
//basic add function
//here a b are parameters and 2 & 4 is arguments
function add(a, b) {
  const sum = a + b;
  console.log(sum);
}
add(2, 4);

//also function can return values
function average(a, b) {
  const avg = (a + b) / 2;
  return avg;
}
//we have to store it in variable
const avgVal = average(10, 60);
console.log(avgVal);

//code after return statement not going to execute
//return means it says function does his job and it will give the statements written in return

//for exercise
function isValidPassword(password, username) {
  const pass = password.toLowerCase();
  const user = username.toLowerCase();
  if (pass.length > 8 && !pass.includes(" ") && !pass.includes(user)) {
    return true;
  }
  return false;
}

console.log(isValidPassword("Rishi@123", "Rishi"));

console.log(isValidPassword("TravisScott@1989", "jarvis"));

console.log(isValidPassword("hello1", "footballLuvr"));

//function to calculate average from array of elements

function avgArray(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum / arr.length;
}

const avg = avgArray([75, 76, 80, 95, 100]);
console.log(avg);

//pick a random card from card of deck
//basically return object with value and suit of card

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

for (let i = 0; i < 5; i++) {
  console.log(getCard());
}
