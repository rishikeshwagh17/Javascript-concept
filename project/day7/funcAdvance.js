//understand scope of variable in function
//Higher order functions
//pass function as callback

//for function scope variable is onlly access inside that function definition
//means inside { } braces

//ex
function sayHello() {
  let person = "rishi";
  const age = 23;
  var color = "teal";
}
//all of below will throw err
// console.log(person);
// console.log(age);
// console.log(color);

//so 2 functions can have variables inside them of same name
function hello() {
  let name = "Rishi";
  console.log(name);
}
function hi() {
  let name = "Ronaldo";
  console.log(name);
}
hello();
hi();

//block scope
//see what will happen incase of var
let animals = ["bear", "cow", "dog", "cat"];
var i = 10;
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
console.log(i); //must be 10 but it becomes 4 because of i in for loop

//but if you use let it will behave different in block scope
let j = 10;
for (let j = 0; j < animals.length; j++) {
  console.log(j, animals[j]);
}
console.log(j);

//lexical scope - very good example is react component

/*
lexical scoping is when we have childfunction inside parentfunction 
when we access variable inside child if it is not there it will look for upper scope
means it will look in parent function if it found it uses that variable
in above example inner look for name var inside its scope but not found so it look for ++scope above and found it in scope of outer so it used it
*/

function outer() {
  //parent
  let name = "rishi";
  function inner() {
    //child
    console.log(`hello ${name}`);
  }
  inner();
}
outer();

//also look in one scenario try to access var inside child outside child inside parent scope
// function parent() {
//   let x = 10;
//   function child() {
//     let y = 10;
//     console.log(`values are ${x} & ${y}`);
//   }
//   console.log(y);
//   child();
// }

// parent(); // look into console it says y is not defined in parent means it is only valid upto child function scope

function grandDad() {
  let sirname = "wagh";
  function dad() {
    function son() {
      console.log(`${sirname} Rishi works as a devloper`); // looks sirname inside son then dad not found then found in grandDad scope
    }
    son();
  }
  dad();
}

grandDad();

//function expression in js

//you can assign function to a variable
//because function in js are objects you can store them like you store object in a variable
function add(x, y) {
  return x + y;
}
//same is below
const sum = function (x, y) {
  return x + y;
};

console.dir(sum); //see it will represent object
console.log(sum(3, 4)); // give sum

//higher order functions
//simply a function which operate on other function
//accept other function as argument
//also can return function

//see below
function callThreeTimes(func) {
  for (let i = 0; i < 3; i++) {
    func();
  }
}

function latestMeme() {
  console.log("Moye Moye");
}

//see now we are passing this meme function as arg to callThreeTimes
callThreeTimes(latestMeme);

//lets say caseof function return function

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//here we will choose by what we need to multiply as num

const triple = multiplyBy(3); //multiply by 3
console.log(triple(5)); //now get triple of 5

const double = multiplyBy(2);
console.log(double(5));

//ex check is below 18 - child or adult
function makeBetweenFunc(min, max) {
  return function (age) {
    if (age > min && age < max) {
      return true;
    }
    return false;
  };
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(12));

const isAdult = makeBetweenFunc(18, 40);
console.log(isAdult(22));
