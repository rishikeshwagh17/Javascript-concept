//in this section we will learn about the arrow functions in the javscript
//new way and alternative way of declaring the regular function expression

const regular = function () {
  console.log("hello");
};
// can be used by arrow like below
const arrow = () => {
  console.log("hellow");
};

//more examples
const square = (x) => {
  return x * x;
};
//also you can remove parens if only single argument is there also if only single expression in the return statement you can erase the return keyword

//but incase of 2 args it will not work and more than 1 exp in the return statement
const multiply = (x, y) => {
  return x * y;
};

//lets use arrow function with the array functionality
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = nums.map((el) => {
  return el * 2;
});

console.log(double);

//find method in an array
/*
    find method of array returns the value of first element in the array that satfiest the condition mentioned in the callback function

    syntax - 
    arr.find(callbackFn)
*/

const movies = [
  "The fantastic Mr. fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
];

const resultMovie = movies.find((movie) => {
  return movie.includes("Mrs");
});

console.log(resultMovie);

//filter function of the array
//creates a new array with all elements that pass the test implemented bythe callback function.

//it gives all elements that matches condition in the callback and add it to array
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNos = numArr.filter((el) => {
  return el % 2 === 0;
});
console.log(evenNos);

const devs = [
  { name: "rishi", exp: 1.5, companies: ["evolent"] },
  { name: "lokesh", exp: 2.8, companies: ["evolent", "amdocs"] },
  { name: "sunil", exp: 4, companies: ["evolent", "xoriant"] },
  { name: "kshitish", exp: 2.5, companies: ["infosys"] },
];

const evolentExpDev = devs.filter((emp) => {
  return emp.companies.includes("evolent") && emp.exp > 2.5;
});

console.log(evolentExpDev);

const infosysDev = devs.filter((emp) => {
  return emp.companies.includes("infosys");
});
console.log(infosysDev);

//in ecommerce you can use this functionality to filter the products based on price or the categories

//javascript array method every

//Every function of array is function which has callback function and it returns true if and only if the condition inside callback function for array pass

const words = ["dog", "dig", "log", "bag", "wag"];
//this array above has each word of length 3 so look below

const is3LetterWord = words.every((word) => {
  return word.length === 3;
});
//if all elements of array pass this then every will return true other false if any single is not satisfying this
console.log(is3LetterWord);

// Some method in array
//just like every it will return true or false
// but here if atleast 1 (any) element of array pass the condition of callback function of some method then it will return true otherwise false

//lets say in above array we want to look is any word start with letter d we can do it like

const isStartWithD = words.some((word) => {
  return word[0] === "d";
});

console.log(isStartWithD);

//sorting in array once again
//javascript array sort method weird because it converts the array elements into the string and then on that just sort
//we have to pass the custom compare function see below for ascending and descending

const numbers = [100, 50, 400, 300, 22, 10];
console.log(numbers.sort()); //this will always give wrong ans

//keep in mind sort method, is array method which mutate the array, we need to create a copy first so original array not manipulated
const ascendingSort = numbers.slice().sort((a, b) => {
  return a - b;
});

const descendingSort = numbers.slice().sort((a, b) => {
  return b - a;
});
console.log(ascendingSort);
console.log(descendingSort);

//reduce function of array
//one of tricky function
//it executes the callback (reducer here) function on each element and return single value at end
//like there are two params in callback accumulator and current value
//reduce remebers return value of callback on each iteration and assign it to accumulator for next iteration and current value becomes next array elementF

//ex - addition of array elements
/*
    callback iteration   accumulator                    current                        return
    1                    10(arr first ele)              20 (arrays next elemnt)        30      - next accumulator
    2                    30                             30                             60
    3                    60                             40                             100
    4                    100                            50                             150 - final return value of reduce
*/

const arr = [10, 20, 30, 40, 50];

const total = arr.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log(total);

//ex-2 product of array element

const product = arr.reduce((total, currentVal) => {
  return total * currentVal;
});
console.log(product);

//you can also pass intial value to the reduce which takes as a first accumulator value
//ex-
const newTotal = arr.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
}, 100); //100 is intial value for accumulator
console.log(newTotal);
