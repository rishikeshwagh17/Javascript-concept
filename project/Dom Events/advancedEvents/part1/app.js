const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];
const container = document.querySelector("#boxes");
// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
// }

//lets add a eventListener on box

// const changeColor = function (box) {             //we are passing box as a argument but we can use this keyword
//   console.log(box.style.backgroundColor);
// };
// const changeColor = function () {
//   console.log(this.style.backgroundColor);
// };
// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
//   //   box.addEventListener("click", function () {
//   //one way of passing box as a argument             but we can directly use changeColor without passing arg using this keyword
//   // changeColor(box);
//   //   });
//   box.addEventListener("click", changeColor);
// }

//lets add a h1 and manipulate its background color on click of these color boxes
const changeBgColor = function () {
  const h1 = document.querySelector("#head");
  h1.style.color = this.style.backgroundColor;
};
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);

  box.addEventListener("click", changeBgColor);
}

//event Object in javascript
//lets see this by applying a event on the body
document.body.addEventListener("keypress", function (e) {
  console.log(e);       //e is event object here we see many time in peoples code this implementation
});
