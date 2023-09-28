if (1 === 1) {
  console.log("if block execute");
}

let rating = 3;
if (rating === 3) {
  console.log("you are superStar");
}
rating = 2;
if (rating < 3) {
  console.log("you are not a superStar");
}

let highScore = 1600;
let userScore = 1500;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new highscore of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game. your score of ${userScore} cannot beat highscore of ${highScore}, try again to beat it`
  );
}

let grades = 0;
if (grades === 3) {
  console.log("wow you are a superstar great grades");
} else if (grades == 2) {
  console.log("doing good you are a star");
} else if (grades < 2 && grades > -1) {
  console.log("needs improvement");
} else {
  console.log("invalid grades");
}

let password = "chickenGal";
if (password.length >= 8 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("INVALID PASSWORD!");
}

//number guessing check it is in between 1- 10
let num = Math.floor(Math.random() * 10) + 1;
if (num >= 1 && num <= 5) {
  console.log(`number is between 1 to 5 & num is ${num}`);
} else if (num > 5 && num <= 10) {
  console.log(`number is between 5 to 10 & num is ${num}`);
}

let color = `purple`;
if (color === `purple` || color === `liliac` || color === `violet`) {
  console.log("GREAT CHOICE !!");
} else {
  console.log("CHOSE WISELY!!");
}

let loggedInUser;
if (!loggedInUser) {
  console.log("please login first");
} else {
  console.log("welcome to homepage");
}

//switch cases
let day = 3;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
  default:
    console.log("INVALID DATE");
    break;
}

//ternary operations
// let user = "rishi";
let user;
let val = user ? "GREEN" : "RED";
console.log(val);
