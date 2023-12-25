/*
    DOM in javascript
    everything in javascript is object and in browser we use HTML CSS to make Page
    so make things work like click on sign up button on form we need javascript functionality
    so we take HTML element and add functionality to it using javascript so this is basically dom manipulation
    where you just add functionality to work like you want,just in technical way it is called dynamic behaviour to website
*/

/* standard-
    The DOM is a javascript representation of the webpage
    It is your JS window into the contetnts of a webpage,it is basically just a bunch of objects that you can interact via JS
*/

/*
    we can use id class to do dom manipulation you can use id/class or also directly element of html element and do changes to it
*/

//document is the entry point where we manipulate things
//it has so many methods and properties
//just do console.dir(document) and see it will load all the document of the webpage {object}

//basic dom manipulation way
//1-selecting   2-maipulate

const para = document.getElementById("main");
const inputs = document.getElementsByTagName("input");
console.log(inputs);
console.log(inputs[0]);

const lists = document.getElementsByClassName("special");
console.log(lists);

const h1 = document.querySelector("h1");
console.log(h1);

const allPara = document.querySelectorAll("p");
console.log(allPara);

const image = document.querySelector("#fireCrack-Photo");
console.log(image);

//how to select the li tag inside section we simply cannot do by queryselector as it gives first match inside body
//we have to do like this
const city = document.querySelector("section ul li.special");
console.log(city);

//how to manipulate elements
//work with innerText and textContent
//if you look document object by console.dir you will see so many properties associate with it
//we will cover all important you we have to know

const header = document.querySelector("h1");
console.log(header.innerText);
//innertText basically shows the only text when you console.log

//lets say you add bold tag inside paragraph and make that text display as none so innerText will not show it when you try to console log but textContent will show the bold text also
const testPara = document.querySelector(".test");
console.log(testPara);
console.log(testPara.innerText); // this does not show bold text
console.log(testPara.textContent); //this show all text including the text inside tags (inside script tag also)

//innerHTML
//as the name suggest it will gave not only text but also tags inside a html element
//like it will give all the children inside selected tags

const form = document.querySelector("form");
console.log(form.innerHTML);
