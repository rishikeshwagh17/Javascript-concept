//asynchronous javascript includes the async promises requests
//how javscript works behind the scene

/*
callStack-
mechanism the js interreter uses to keep track of its place in a script that calls multiple function 
in simple way it is what function is currently being run and what functions are called from within that function
it is stack data structure which holds the function which is called and if that function has other function inside it then sequentially by execution they are added on top of stack and once there functionality is done they get pop of and finally main function finishes it execution and it pops off
*/
//example code to see actual call stack just put the breakpoint using dev tools in chrome and see callstack at the right hand section which function it calls
const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 4);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};

makeRant("explaining CallStack", document.body);

//just keep in mind that javascript is single thread which means single js thread is running at most one line of js code.
//NOW scenarios
//just think we are sending request to server that give me movies which containes bat as a text so that request might take time to respond so user is not going to sit back and do nothing we need to make our code work so we have async solution for this

//lets say we are sending a api request
//now javascript execute code and we are setting 3 sec timeout to send request so to execute other code
//here javascript does not keep track of 3 sec it is our browser which keeps tracks with the hepl of webAPI

/**
 * browser coes with webAPI that are able to handle certain task in the background (make request /setTimeout)
 * then js stack recognises these webAPI func and passes them off to the browser to take care of
 * once the browser finishes those task they return and are pushed onto stack as a callack
 */

//check javascript call stack visualisation of phillips roberts on latentflip website it is so cool
