//Request in web devlopement to server can be done in following way
/**
 * XMLHTTP --- older way
 * FETCH
 * AXIOS -library for making HTTP request
 */

//but firstly we need to know the term ajax
/**
 * AJAX stands for asynchronous javascript and XML  now a days nobody work with XML we use json but it is just standard we call AJAX
 * in the older website before the single page application while fetching data our website refreshes
 * so what happens is browser is sending the new request to the website server for new webpage
 * browser(client) --- request ---> server evrytime time for new data and page refreshes
 * in new way we are sending request and data is being loaded behind the scene and it doesnt invole page refresh and data element is added on page
 * oldly we are sending the data in the form of XML but now we use json for sending the data to request and getting the same json format data in response.
 */

/*
 * JSON and XML 
    how data is format in the object
    in XML - (extensible markup language) 
    we have to use tags like 
    <name>Todd</name>
    <email>todd@gmail.com</email>

    incase of json we are using object like notation it is not javascript like js it cannot store functions
    {
        "name": "todd",
        "email": "todd@gmail.com"
    }

    keypoint is we can take it and easily convert it into the javascript object

*/

/**
 * now wea re going to make the request
 * XMLHttpRequest - drawbacks -(older,does not support promises so lot of callbacks,wierd capitalization,hard syntax)
 *
 */

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   //now we can mainpulate the data
// });
// firstReq.addEventListener("error", () => {
//   console.log("Error occur !!!!");
// });

// firstReq.open("GET", "https://dummyjson.com/products/1", true);
// firstReq.send();
// console.log("Request send");

//making request using fetch
/**
 * newer way of sending the request via js
 * supports promises and mostly people uses this or axios
 * in fetch request we pass in some url and fetch will return promise which if resolve gives us request other wise we will catch it and show error
 *
 */
// fetch("https://dummyjson.com/productss/1")
//   .then((res) => {
//     console.log(res);
//     //see the res.body you will see it is stream and and it is stream because most of time chunk of data come in response so we have json method to convert it to json
//     //   console.log(res.json()); // it takes time so it (json method) returns promise

//     //as fetch will always resolve in case of also 404 and 500 plesae check status code before print data
//     if (res.ok) {
//       //res.status === 200
//       res.json().then((data) => {
//         console.log(data);
//       });
//     }
//   })
//   .catch((err) => {
//     console.log("Something went wrong with Fetch"); //it is strange because fetch will resolve even if we get 404 and 500 the only way fetch promise rejects is by network or connection problem
//     console.log(err);
//   });

//fully refactored code
// fetch("https://dummyjson.com/products/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Status Code Error: ${res.status}`); //this err will take us to catch block callback
//     }
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("Something went wrong with Fetch");
//     console.log(err);
//   });

//lets chain the fetch api here
fetch("https://swapi.dev/api/people/1/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status code issue: ${response.status}`);
    }
    return response.json();
  })
  .then((resdata) => {
    console.log("fetching first URL");
    console.log(resdata);
    const filmURL = resdata.films[0];
    return fetch(filmURL);
  })
  .then((filmUrlRes) => {
    if (!filmUrlRes.ok) {
      throw new Error(`Status code issue: ${filmUrlRes.status}`);
    }
    return filmUrlRes.json();
  })
  .then((filmUrlData) => {
    console.log("fetched film url");
    console.log(filmUrlData);
  })
  .catch((err) => {
    console.log("Fetched api failed");
    console.log(err);
  });
