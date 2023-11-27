//simple loops as we learn in any prog lang
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//check always the loop terminating condition if you messed it you will get infinite loop
//exp - here i is always going to be greater than 0 so i will go on
// for(i = 20; i >= 0; i++){
//     console.log(i);
// }

//for loops in array
const animals = ["lions", "tigers", "pumas", "leopards"];

for (let i = 0; i < animals.length; i++) {
  console.log("animals in array", animals[i]);
}

//lets say we have array of score of students

const classStudents = [
  { firstName: "rakesh", score: 92 },
  {
    firstName: "rutuja",
    score: 90,
  },
  { firstName: "ramesh", score: 93 },
  { firstName: "rajveer", score: 94 },
];

for (let i = 0; i < classStudents.length; i++) {
  let student = classStudents[i];
  console.log(`${student.firstName} scores ${student.score}`);
}

//for strings
const school = "Highschool";
for (let i = 0; i < school.length; i++) {
  console.log(i, school[i]);
}

//while loop
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

//guess num game
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
console.log("target value ", target);
while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
}

console.log("guess value ", guess);
//make sure in case of while loop util you make update to variable which make while loop
//condition false you will get infinite while loop

//for of loops in js
//nice and easy way to iterate over an array

const myStudents = ["rishi", "colt", "stephen", "yuri", "soap"];

//we will print element in array
for (const student of myStudents) {
  console.log(student);
}

//magic square is 2d array in which each array elements sum is equal
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// how to iterate throught this array and find sum of all elements in each row of array

for (const row of magicSquare) {
  let sum = 0;
  for (const el of row) {
    sum += el;
  }
  console.log(` ${row} sums to ${sum}`);
}

//looping over objects
//objects is not iterable like the arrays and strings because it has keys and values

const movieReviews = {
  Alien: 9.0,
  Astra: 9.2,
  Amelie: 9.4,
  Excortist: 9.7,
  "End game": 9.8,
};

/*try this this will not work
for(let el of movieReviews){
    console.log(el);
}
*/

//so we have Objects.keys() and Objects.values() methods

for (let key of Object.keys(movieReviews)) {
  console.log(key);
}

for (let value of Object.values(movieReviews)) {
  console.log(value);
}

//together both keys and values it will be like
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

//lastly for in loop
//used for loop over keys in object

const myObj = {
  name: "rishi",
  age: 23,
  work: "devloper",
  education: "Graduate",
};

for (let key in myObj) {
  //   console.log(key);
  console.log(key, myObj[key]);
}
