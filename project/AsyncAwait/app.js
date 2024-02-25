//async await in javascript
// it is nice and clean syntax to work with promises

function getData() {
  const data = axios.get("https://swapi.dev/api/people/1/");
  console.log(data); // it will not wait till promise to resolve so we have to use .then to wait for it to resolve and we then will get the data
}
// so we can use async keyword to make our code look synchronous
//as soon as we add async keyword in front of function it will always return promise
async function hello() {
  return "hello guys";
}
//so you can use .then with it

hello().then((val) => {
  console.log("Promise resolved with: ", val);
});

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y Must be numbers";
//   }
//   return x + y;
// }

//another way of writing it
function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y Must be numbers");
    } else {
      resolve(x + y);
    }
  });
}

add(4, 5)
  .then((val) => {
    console.log(`Promise resolved with ${val}`);
  })
  .catch((err) => {
    console.log(`Promise rejected with ${err}`);
  });

//await keyword in javascript
//basically we can use await keyword inside the async function only
//it will stop the execution of the function waiting for the promise to be resolved
//why to use await

//lets see example
// function getPeople() {
//   return axios.get("https://swapi.dev/api/people/1/"); //this will return promise
// }
//we need to wait until promise resolved and callback to execute so we
// getPeople()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//now use await it will look like
// async function getPeople() {
//   const res = await axios.get("https://swapi.dev/api/people/1/"); //because of await we dont need to use .then
//   console.log(res.data); // this code will always resolve(execute) after promise get resolve for axios
// }
// getPeople();

//as we not using .then & .catch what if the promise in async function is rejected we need to hanlde error
//so we can use try catch here
// also we can add .catch to getPeople()
async function getPeople() {
  try {
    const res = await axios.get("https://swapi.dev/api/peoplesssd/1/"); //because of await we dont need to use .then
    console.log(res.data); // this code will always resolve(execute) after promise get resolve for axios
  } catch (err) {
    console.log("Error!! ", err.message);
  }
}
getPeople();
// getPeople().catch((err) => {
//   console.log(err);
// });
