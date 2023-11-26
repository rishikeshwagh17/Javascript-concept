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

