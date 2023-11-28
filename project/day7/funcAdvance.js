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
