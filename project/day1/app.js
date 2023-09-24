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
