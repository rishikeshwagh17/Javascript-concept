//array have different methods which accepts callbacks for functionality

//1- forEach method of array

const numsArr = [10, 20, 30, 40, 50, 60, 70, 80];
//now we want to double the elements and print them we can do this
numsArr.forEach(function (arrEle) {
  console.log(arrEle * 2);
});

//also we can access index along with element by using second arg
numsArr.forEach(function (arrEle, arrIdx) {
  console.log(arrIdx, arrEle);
});

//you guys can also use arrow functions if you are familiar with it it will also work here
numsArr.forEach((e, index) => {
  console.log(` array ele for index ${index} is`, e);
});

// 2 - Map function
//in this method it creates new array with results of calling a callback function of new array
//it doest not change the old array just return new array, so need to store in variable

const words = ["javascript", "react", "html", "css"];
const upperCasedWords = words.map((el) => el.toUpperCase());

console.log(words);
console.log(upperCasedWords);

const books = [
  {
    title: "game of thrones",
    author: ["RR martin", "rishi"],
    rating: 9.2,
  },
  {
    title: "harry potter",
    author: ["taylor"],
    rating: 9.7,
  },
  {
    title: "wings of fire",
    author: ["APJ kalam", "Son of kalam"],
    rating: 10,
  },
];

//now we want new array of obj with only book and author in it so it can be done in this way

const newBookArr = books.map(function (el) {
  return {
    title: el.title,
    author: el.author,
  };
});
console.log(newBookArr);
