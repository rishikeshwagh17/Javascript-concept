//object methods and this keyword inside javascript (basics concepts cover now advanced concepts of javascript)

//from ES 2015 we can use object shorthand property which will look below
//older way using example

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, currVal) => sum + currVal);
//   //now here we want to return object so we previously have to give key & value like
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//   };
// };

//new way directly return keys in return
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, currVal) => sum + currVal);
  return {
    max,
    min,
    sum,
  };
};
//here it will take keyname and also respective value and set it to return onject
const review = [4.5, 5.0, 4.2, 3.8, 4.7];
const stats = getStats(review);
console.log(stats);

//computing properties in object
//lets say we want to add key value to object
const role = "host";
const person = "james";
const role2 = "Director";
const person2 = "Booker";
// const obj = {};
//we want to add key as host and value as james
//what we do previously is
// obj[role] = person;   //key becomes host and value become james in obj object

//now we have do it directly inside object like
const obj = {
  [role]: person,
  [role2]: person2,
};

console.log(obj); //it will give us object with key val pair we pass directly

//next we have adding methods to object properties-(keys)
//we can have object which have methods as values to keys

const mathOperations = {
  multiply: (x, y) => {
    return x * y;
  }, //all of these are metods of object
  divide: (x, y) => {
    return x / y;
  },
  square: (x) => {
    return x * x;
  },
};

//to use object methods simply use dot notation like we use before

const square = mathOperations.square(10);
console.log(square);

//also for object methods we can use shorthand way

const auth = {
  userName: "tommyBot",
  login() {
    console.log("Logged In");
  },
  logout() {
    console.log("GoodBye you logged out"); //here it will store function name as key for object
  },
};

console.log(auth);
auth.login();
auth.logout();
