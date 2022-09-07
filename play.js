

var myVar = 20;
myVar += 5;
console.log(myVar);


goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
console.log(goodStr);

notBadAgainStr = 'Finn responds, "Let\'s go!"';
console.log(notBadAgainStr);

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[6]; // Change this line
console.log(firstLetterOfLastName);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line
console.log(wordBlanks);

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
console.log(myData);

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray);
console.log(myArray.shift());

var myList = [
  ["Pasta", 10],
  ["Eggs", 12],
  ["Milk", 1],
  ["Yoghurt", 2],
  ["Orange juice", 3],
  ["Detergent", 4]
];
console.log(myList);

function reusableFunction() {
  console.log("Hi World");
}
console.log(reusableFunction());

function functionWithArgs(one, two) {
  console.log(one + two);
}

functionWithArgs (3, 4);

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);

function myLocalScope() {
  'use strict';
 
   // Only change code below this line
   var myVar;
   console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
 
 // Run and check the console
 // myVar is not defined outside of myLocalScope
 console.log('outside myLocalScope', myVar);
 

 function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
console.log(answer);

function timesFive(num) {
  return num * 5;
}
var answer = timesFive(7);