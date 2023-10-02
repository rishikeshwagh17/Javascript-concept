let colors = ["red", "blue", "green", "orange", "yellow", "indigo", "violet"];
console.log(colors);
console.log(colors.length);
console.log(typeof colors);

console.log(colors[0]); //index always start from 0 if why it start from 0 not 1 see video on youtube
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);
console.log(colors[6]);
//try to access beyond 6 and see result
console.log(colors[7]); //gives undefined because we are trying to access variable which is not there.

//how to modify array
let shoppingList = ["cheese", "biscuits"];
console.log("array before modification", shoppingList);
//remember we are not adding element at that position we are replacing element there
shoppingList[1] = "muffins";
console.log("array after modification", shoppingList);

//one way to add element to end of array
shoppingList[shoppingList.length] = "toamtoes";
console.log(shoppingList);
//but we have built in method to use it where we can add without replacing the current
//remember these methods are for adding or removing element at start or end

//Push - add to end
//Pop - remove from end
//shift - remove from start
//unshift - add at start

let mySongs = ["The Office", "StartBoy", "blinding Lights", "Gods Plan"];
console.log(mySongs);
//now i am going to add song at the end
let variable = mySongs.push("highest in the room"); //return new arrays length
console.log(variable);
//now lets see mySongs array
console.log(mySongs);

//now when we use string method it returns new string to us because string are immutable
//but incase of array we can modify them so it returns length of new array

mySongs.push(true);
console.log(mySongs);
//we made irrelavant entry lets remove it using pop
let popValue = mySongs.pop();
console.log(popValue);
console.log(mySongs);

//shift and unshift

//unshift also return the lenght of array
let myToDoList = ["build project"];
//before building project we need to know the fundamentals
myToDoList.unshift("learn javascript");
console.log(myToDoList);
//lets do our company work first then learning come
myToDoList.unshift("company work");
console.log(myToDoList);

let work = [];
//if we add multiple item at once using unshift it will add them inorder they as a chunk
work.unshift("sleep", "eat"); //it will add eat and sleep as a chunk
//but if we add them one at a time result will like ["sleep","eat"] because we are adding at first index
console.log(work);

work.unshift("job", "chill");
console.log(work);

//now our lets remove items from array once done
myToDoList.shift(); //it will remove item from start and return that item
console.log(myToDoList);
myToDoList.shift();
console.log(myToDoList);

//additional array methods for info
//concat
let array1 = ["a", "b", "c", "d"];
let array2 = ["1", "2", "3", "4"];
let newArray = array1.concat(array2); // concat (joins two arrays) it gives new array without changing array1 and array2 you can concat as many as you want
console.log(newArray);

//includes
let numbers = [1, 2, 3, 4, 5, 6];
//lets find if 6 is present in the array
console.log(numbers.includes(6)); //it returns true or false it didnt return index number

//indexOf
console.log(numbers.indexOf(6)); //returns index where 2 is present otherwise return -1
console.log(numbers.indexOf(9));

//reverse and join
let word = ["T", "C", "E", "P", "S", "E", "R"];
console.log(word.reverse());
//lets see origial array also changed or not
console.log(word); //it also changes original one

//join
//it simply joins array elements together (turns them into string) and gives a complete string
let letters = ["c", "a", "t", "&", "d", "o", "g"];
console.log(letters.join()); //it will also include ,
//use this instead
console.log(letters.join("")); //whatwhere you pass as a parameter it will take in between
console.log(letters.join("#"));
console.log(letters);

//slice
//this method is same as string slice returns array from start index to exclude of index mentioned

let mobile = ["iphone", "google", "samsung", "oppo", "vivo"];
let andriodMobile = mobile.slice(1);
console.log(andriodMobile);

let asianMobile = mobile.slice(2, mobile.length);
console.log(asianMobile);

//Splice method it takes (index,number of elements to remove/replace,elements) as a param
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, "octopus");
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, "orca", "grizzly");
// ["shark", "octopus", "salmon", "orca", "grizzly"]

//sort functionality
let arr = [1, 1000, 34, 67, 21];
//javascript is wierd incase of sorting array because they convert array element into string first then it sort them based on the UTF16 codes

//it manipulates original array plus returns new array
console.log(arr.sort());
console.log(arr);

//people usually use a compare function to sort array look for mdn web docs or blog in medium or free code camp

//correct way is like
let actualSort = arr.sort((a, b) => a - b);
console.log(actualSort);
