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

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
});
firstReq.addEventListener("error", () => {
  console.log("Error occur !!!!");
});

firstReq.open("GET", "https://dummyjson.com/products/1", true);
firstReq.send();
console.log("Request send");
