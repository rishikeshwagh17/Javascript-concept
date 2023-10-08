//objects are used to store different type of data
/*
 lets say we have one persons fitness data we want to store 
 no of steps
 calories
 heartRate
 oxygen level

 we cannot store values firectly in array because each of them have specific property 
 if we store them we have to figure out for what purpose the values are for

 means we need properties (keys to access) them so object is useful
*/

const fitBitData = {
  noOfStep: 32111,
  calories: 212.12,
  heartRate: 71,
  oxygenLevel: 98,
  healthLevel: "good",
};

//properties = key + value
/* 
object literal syntax
    {

    }
*/

//access them
console.log(fitBitData);
console.log(fitBitData.noOfStep);
console.log(fitBitData.calories);
console.log(fitBitData.healthLevel);

//what if keys are number lets see how to access them
const numbersObj = {
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "forty",
};
// console.log(numbersObj.10); will give error
console.log(numbersObj[10]); //this is another way to access object properties
//just put inside [] the key name

//what javascript does is it converts key to string
console.log(fitBitData["noOfStep"]); // this will also give us no of steps value

//another reason to use [] is when keys have spacing between them
const song = {
  "ed sheeran": "shape of you",
  Drake: "Gods Plan",
  "Travis Scott": "Sicko Mode",
};

console.log("song of ed sheeran - ", song["ed sheeran"]);
console.log("song of Travis Scott - ", song["Travis Scott"]);
