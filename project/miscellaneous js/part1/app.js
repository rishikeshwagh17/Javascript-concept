// miscellaneous features in js
//default function params in js

//without default param way
function multiply(x, y) {
  return x * y;
}

//always ake sure either you pass default value to both param or if only 1 param then that param must be last at sequence
//this will not work
// function multiply1(a = 2, b) {
//   return a * b;
// }
function multiply1(a = 2, b = 10) {
  return a * b;
}

console.log(multiply1());
console.log(multiply1(4, 2));

//spread in function call, array literal, object literal

//it will spread out the elements in iterables when we use ...iterable

const params = [1, 2, 3, 5, 89, 77, 65];
//we want to find max number
//we know Math.max takes multiple params we can destructure our array

const max = Math.max(...params);
console.log(max);

function giveMeVal(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
const str = "GOAT";
giveMeVal(...str);

//function(...params){}  -- spread in function it will spread params in function

//array literals
//const arr = [1,2,3,5,6,7]    ...arr is array destructuring

const even = [2, 4, 6, 8];
const odd = [1, 3, 5, 7, 9];

const numbers = [...even, ...odd]; //order matters
console.log(numbers);

//spread in object literals
const tester = {
  speciality: "testing",
  skillSet: "selenium",
};

const devs = {
  speciality: "developement",
  skillSet: ["frontned", "backend"],
};

const companyTesterEmp = {
  ...tester, //destructuring tester object so this object can get all key values in it
  isGood: true,
  avgRating: 8.5,
};

console.log(companyTesterEmp);

//if 2obj have same key then order matters it will override value of ...obj1 and gets value of ...obj2
//ex - speciality key in above example if we destruct both obj
const emp = {
  ...tester,
  ...devs,
};
console.log(emp); //check emp obj speciality key it will take devs[speciality] value
//object destruct only work inside object

//if you want to use in array then
// const newArr = [...devs];
// console.log(newArr);  this will always give err

const newArr = [{ ...devs }];
console.log(newArr); //this will work

//rest operator in js
//rest operator is like ... but it means give me rest mostly used in functions arguments

//every function has arguments which is array like object but it has shortcoming like it cannot be used inside arrow function also it cannot access method of array so we need to convert it to array first by using spread operator

// function add(a, b, c, d, e, f) {
// console.log(arguments)         ------ this will give arguments (array like object)
//   return a + b + c + d + e + f;
// }

//so rest operator come into picture
//you can have only one ...rest & it should be last parameter

//we can do
function add(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5)); //mostly used in react in component in case of props

//another useful usecase
//it says give me rest arguments for this function apart from provided one(first & last) here
function fullName(first, last, ...rest) {
  console.log(`hello ${first} ${last}`);
  console.log(rest);
}
fullName("rakesh", "sahu", "devloper", "microsoft");

/*
 destructuring in an javascript
*/

//1- destructuring in array

const raceResult = [
  "Louis hamilton",
  "Max verstappen",
  "Logan Sargeant",
  "Sergio Perez",
];

const [fastest, ...others] = raceResult; // it will set based on array elements (according to index)
console.log(fastest);
console.log(others);

//so 1st in destructure get value of array[0] and ...other will get rest elements so keep in mind

//object destructuring in javascript
//we have to destructure the key look in the example you will understand easily

const runner = {
  first: "Usain",
  last: "Bolt",
  country: "Jamaica",
  title: "9.58 bolt a champion",
};

const { first, last, title } = runner; // first last and title is key here (variable so you can access them)
console.log(`Mr. ${first} ${last} the world's ${title}`);

//it is like taking key out and setting it as variable and its value is values of key in object
//you can also give different name to key (variable) like below
const { country: nation } = runner; //now country can be access by nation as var name
console.log(nation);

//also you can use rest operator for remain properties
const devinfo = {
  name: "Caleb Curry",
  profession: "Teaching",
  hobbies: "coding",
  experience: 10,
};

const { name, profession, ...rest } = devinfo;
console.log(name);
console.log(profession);
console.log(rest);

//same happens with function parameter when we pass array or object as a argument for function
//see below example
function developerDetail({ name, profession, experience }) {
  console.log(`welcome ${name} works as ${profession} has ${experience}`);
}

developerDetail(devinfo); //passing obj as a argument and destructure it on paramters of function definition

const person = {
  firstName: "rishi",
  lastName: "wagh",
  job: "developer",
  age: 24,
};

//object destructuring in case when we send parameters to function
function getInfo({ firstName, lastName, ...rest }) {
  console.log(firstName);
  console.log(lastName);
  console.log(rest);
}

getInfo(person);
