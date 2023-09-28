/*
    now we are going to discuss about null and undefined data types
    Null-
    null is intensional absence of any value
    must be assigned

    Udefined-
    variables that do not have an assigned value are undefined
    lets say you declare variable but did not assign value to it then it give undefined
    when we try to acces it
*/
let loggedInUser = null; // loggedInUser is having value null
console.log(loggedInUser);
//as soon as user is loggedin
loggedInUser = "Rishi"; // now it has Rishi
console.log(loggedInUser);

let color; //
console.log(color);

// now just small math object
console.log(Math.floor(4.6)); //cuts everything after decimal
console.log(Math.round(4.6)); //this will give us next rounded value
console.log(Math.pow(2, 5));

//to generate random number
console.log(Math.random()); // this will always give us decimal number betwn 0 to 1
console.log(Math.floor(Math.random() * 10));

//typeof tells us type of dataTypes
console.log(typeof 11); // we dont need to use paranthesis with typeof
console.log(typeof "abcd");
console.log(typeof undefined);
console.log(typeof null);
const arr = [1, 2, 3, 4];
arr.forEach((ele) => {
  console.log(ele);
});

// equality operators
/*
== checks value but not effective as it not checks type
*/
console.log(23 == "23");
console.log(23 === "23");//checking type as 23 is number and "23" is string
