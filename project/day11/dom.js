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

//try to add bold tag to h1 tg with the innerText and innerHTML you will see diff
//so innerText only adds text so it will also show <b>cool</b> but innerHTML actually add bold text

const h3 = document.querySelector("h3");
// h3.innerText += "<b>!!!</b>";    //uncomment and see what happens
h3.innerHTML += `<b>!!!!</b>`;

//lets say we have form in our webpage we want to get value so there is on attribute called value so we will see how to manipulate dom in case of form

const formInputs = document.querySelectorAll("input");
console.log(formInputs);
console.log(formInputs[2].checked);
console.log(formInputs[3].value);
//you can access any property you want of that elements object
//we can also change the src attribute of image tag also href attribute of anchor tag we jus thave to access that property and change it

//we can also use method getAttribute and setAttribute for elements
const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute("min"));
console.log(range.getAttribute("max"));
//same way you can set attribute as well
range.setAttribute("value", 450); //range value becomes 450 now

//finding parent/child/siblings
const firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);

const ul = document.querySelector("ul");
console.log(ul.children);

console.log(firstLi.nextElementSibling.nextElementSibling.innerText);
console.log(firstLi.nextElementSibling);

//style property is act weird because if you add styles via stylesheet it will give an empty string when you access it
//so basically it will only give you value when you add inline style to the html element which nobody prefers nowadays
//for getting CSS values we can use getComputedStyles(document.querySelector("element")) it will give the object of styles

//manipulating classes
const list = document.querySelector("section ul li");
console.log(list);
console.log(list.classList);
//lets create some CSS class and add that class to list check in css file
list.classList.add("done"); //this will add class along with other classes instead of overriding previous class which happens with style assignment thats why classList is important otherwise we have to use setAttribute('class',''done') and it will overrride previous class
list.classList.toggle("done"); //this will toggle classes on element

//creating elements in dom
const newH2 = document.createElement("h2");
newH2.innerText = "Hello There all my friends";
newH2.classList.add("special");
//now we need to add it to any element then we can use appendChild method
const section = document.querySelector("section");
section.appendChild(newH2); //see the webpage you will se new h2 below ul of section
//lets add some link to the website using createElements
const newLink = document.createElement("a");
newLink.innerText = "FreeCode camp";
newLink.href =
  "https://www.youtube.com/watch?v=5fb2aPlgoys&pp=ygUbZnJlZWNvZGVjYW1wIGRvbSBqYXZhc2NyaXB0";
const firstP = document.querySelector("p");
firstP.appendChild(newLink);

//you can see the MDN webiste for this there are so many methods
//remove and removeChild

const parentUl = document.querySelector("section ul");
const childLi = ul.querySelector(".special");
const deleted = parentUl.removeChild(childLi);

const h1Tag = document.querySelector("h1");
h1Tag.remove();
