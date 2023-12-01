/*
functions as a callback functions
*/

//callback is a function passed as a argument to the outer function so that we can utilised it inside outer function

function hello() {
  console.log("hello guys");
}

function outer(callback) {
  console.log("I am outer function");
  callback();
}

outer(hello);

//we can pass callback as a anonymous function like function with no name
//like when we are not going to use one function again somewhere else there is no need to define it in the scope
//directly pass it as a anonymous function to where it require

// setTimeout(function greeting() {
//   alert("Welcome friend");
// }, 3000);
//it will show alert on website after three seconds saying welcome

//hoisting in javascript

//what will happen

//case1
var animal = "tapir";
console.log(animal); //this will work as expected

//case2
console.log(devloper); //but why it doesnt give error as we not define or declare devloper yet
var devloper = "rishi";
/*
this is because weird javascript behaviour know as hoisting where it will take var declaration first (only happens with var ,let and const not support this)
it will treat it as 
var devloper;
console.log(devloper);
*/

//another thing what will happens incase of function
//it will happen incase of below two cases

howl();
function howl() {
  console.log("wolf awooooo");
} //because javascript interprent this first

//also it will give undefined if we use function expression with var keyword it will give error on call but if you console log moo you will get undefined
console.log(moo);
var moo = function () {
  console.log("moo moooo");
};

//let and const not support this