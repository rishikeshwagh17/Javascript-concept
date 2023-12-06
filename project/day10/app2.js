//here we are going to cover the this keyword in javscript
// it is slightly confusing incase of new js developer

/*
In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.
*/

//refer article from freecodeCamp or you can watch video of hitesh choudhary from youtube

//this keyword
//mostly used in dom manipulation
//this is reference to the current excecution scope & give object

function sayHi() {
  console.log("HI");
  console.log(this);
}
var name = "coder";
//try to run this function in browser and see it will give you window object which means it is global scope
//same thing happen with var name= "coder"
//another way to access sayHi and var name is
// window.sayHi();
// window.name;

// this keyword make more sense when we have methods in objects

const person = {
  first: "cherlyin",
  last: "Dsouza",
  nickName: "Cher",
  fullName: function () {
    //we want to access first last and nickName in here we can use this keyword
    //value of this here is person object itself
    // console.log("this in person object", this);
    console.log(`Hi ${this.first} ${this.last} !!`);
  },
};

person.fullName();
//you can also use function inside object function using this keyword
//example-
const person2 = {
  first: "Rishikesh",
  last: "Wagh",
  nickName: "Rishiiii",
  fullName: function () {
    return `Hi ${this.first} ${this.last}`; //you can also destructure first and last from this and use it
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person AKA ${this.nickName}`);
  },
};

person2.printBio();

//but sometime this behave different (incase of invocation context)
//because value of this depends on the invocation context of the function it is used in

//means value of this depends on how function is executed not just where it executed

//in example above person2 is calling printBio so printBio this is person2 scope

//now see what happens
const printBio = person2.printBio;
//try calling it and see magic
printBio(); //it will say this.fullname is not function - (because this printBio has this as window object not person2)

//so always use oject.methodName syntax while calling method instead of assigning it to some variable & then call it

//also arrow function behave different for this keyword

//to solve this apply bind functionalities came

//this behave different because it depends on execution context (from where it is called -(simply scope))


//you can also look at arrow function vs regular function expression difference there also you get info about this keyword