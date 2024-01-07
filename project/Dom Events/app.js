//events in javascript
//this where things starts real
//events mainly responding to the user inputs and actions

//the thing         the event type      the code to run
//buttton           click               change the color
//input             hits return         get search result
//image             mouseover           display the image caption

//3 ways to work with events but 2 of them are not recommended
//lets add a button and see how to manipulate the things
//firstly we can add event inline to html but it is not recommended
//instead we can select the element and add event on it

//standard way of write on dom is onEventName --> click becomes onclick check MDN for all events

const btn = document.querySelector("#clicker");

// btn.onclick = () => {
//   console.log("you clicked ME! Go AWAY!");
// };

//most recommended way of using event
//if we use btn.onclick then it will set onclick property of btn object a value which will override if we use new function for onclick
//so we can use eventListener so we can execute multiple functions on onclick
//ex-
btn.addEventListener("click", () => {
  alert("you clicked me");
});
btn.addEventListener("click", () => {
  console.log("hello"); //now try click and see result you would see both function call
});

btn.addEventListener("mouseover", () => {
  btn.innerText = "Stop Touching me";
});
btn.addEventListener("mouseout", () => {
  btn.innerText = "CLICKER";
});


