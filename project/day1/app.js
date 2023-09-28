/*
all about string and its method in javascript vanilla
you can so many properties of string on mdn web docs
*/
//strings are indexed
//string has proprties like .length

let learning = "javscript";
console.log(learning);
console.log(learning[0]); //we can access string as a array of char
console.log(learning.length); //this prop retrn length of string
console.log(learning[learning.length - 1]); //return last char

console.log(learning.toUpperCase()); //this will return uppercase string
//but this thing will not manipulate original string
console.log(learning);
//to get uppercase value store it in new variable
let newString = learning.toUpperCase();
console.log(newString);

//second method is trim
//this method will remove the extra spaces at start and end of string like tab of spaces
let color = "   purple   ";
console.log(color, color.length);
console.log(color.trim(), color.trim().length);
//it will only remove leading and traailing spaces from string

//new string methods but these will accept arguments in the function call
//example
let sportsball = "baseball";
console.log("index of base string", sportsball.indexOf("base"));
console.log("index of string ball", sportsball.indexOf("ball"));
console.log("index of string e", sportsball.indexOf("e"));
console.log(
  "what it will return if string to look is not here - ",
  sportsball.indexOf("redball")
);
//slice function array
let sport = "cricket";
console.log(sport);
console.log("splice method");
console.log("it will return string start from index 2", sport.slice(2));
console.log(
  "return string from start index to index prev to last index ",
  sport.slice(0, 5)
);

const animals = ["ant", "bison", "camel", "duck", "elephant", "frog"];
console.log("array of animals - ", animals);
console.log(animals.slice(1, -1));
console.log(animals.slice(-(animals.length + 1)));
console.log(animals.slice()); //will return whole array as it is
//all above method does not make changes to original array instead it returns new array

//string quiz
//what will be output
console.log("PUP"[3]); //ans - undefined
console.log("abcde fgh"[7]); //ans- g

/*
string escape character are 
\' is we use single quote inside - ' ' we have to use \' to work
\" is must be used inside - " " we have to use \" to work it
\n is used to get new line
and if we want to use \ inside string we have to use - \\ inside string
like "my address is N-32\\R-2"
*/

/*
    now we are going to discuss about template literals 
    syntax - ` `
    ex - ` i have ${5+5} RS`
    to access variable inside it we have to use  ${} notation inside it
    see below examples
*/
console.log(`i have ${5 + 5} RS`);
const firstname = "rishi";
console.log(`my name is ${firstname}`);
