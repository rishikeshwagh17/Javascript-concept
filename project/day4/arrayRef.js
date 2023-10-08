const arr1 = [1, 2, 3, 4];
//this is the array but do you know what happen in memory
/*
    as number string null defined boolean are primitives means their variable directly store value in the memory

    but incase of refrence data type like array and object because they store bug data
    instead ofdirectly storing the value in memory 
    their varaible point to location (reference) in memory where data gets stored they hold that reference throughout 
*/

const arr2 = arr1;
//these both array are accessing the same location in the memory
//try to access them aftersome changes in array arr1 changes will be reflect in both of them
console.log("1st array", arr1);
console.log("array2 which hold same refence as arr", arr2);

//now we push something in arr1
arr1.push(10);

//see magic now access both arr1 and arr2
console.log(arr1);
console.log(arr2);
//the push operation changes the values in memory but the both array point to same location in memory so they show same output [1,2,3,4,10]

//remember whenever working with array use const for holding reference value
//so we cannot reassign array to some new reference
//you can make changes to same array like push and pop shift unshift
//but it cannot hold someother reference
const arr3 = ["a", "b", "c", "d"];
arr1 = arr3; // this will throw err we cannot assign value to const variable arr1 cannot hold new reference which is of arr3 reference location in memory
