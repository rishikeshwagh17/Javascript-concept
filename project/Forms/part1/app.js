const creditCardInput = document.querySelector("#cc");
const termsInput = document.querySelector("#terms");
const veggieInput = document.querySelector("#veggies");

// const form = document.querySelector("#signup-form");
// form.addEventListener("submit", function (e) {
//   alert("submitted the form");
//   console.log("cc", creditCardInput.value);
//   console.log("terms", termsInput.checked);
//   console.log("veggieInput", veggieInput.value);
//   e.preventDefault();
// });

//change and input

const formData = {};
// creditCardInput.addEventListener("input", (e) => {
//   console.log("creditCard changed!", e);
//   formData["cc"] = e.target.value;
// });
// termsInput.addEventListener("input", (e) => {
//   console.log("terms changed!", e);
//   formData["agreeToTerms"] = e.target.value;
// });
// veggieInput.addEventListener("input", (e) => {
//   console.log("veggie changed!", e);
//   formData["veggie"] = e.target.value;
// });

//instead of doing above we can add name attribute to each input element and put single input event to add data to formData
//see below we are adding name to each input in html

for (let input of [creditCardInput, veggieInput, termsInput]) {
  input.addEventListener("change", ({ target }) => {
    const { name, type, value, checked } = target;
    if (type === "checkbox") {
      formData[name] = checked;
    } else {
      formData[name] = value;
    }
    console.log(formData);
  });
}

//just change the event name from input to change and see
//change behave different for input type text because it work when we lose focus or press enter